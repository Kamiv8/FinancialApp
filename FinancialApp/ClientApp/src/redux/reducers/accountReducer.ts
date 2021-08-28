import { Action, Reducer } from 'redux';
import { AppThunkAction } from './rootReducer';
import { ErrorType, HandleError } from './errorReducer';
import * as accountType from '../types/accountTypes';
import axios from 'axios';

// ALL ACTION TYPE
type KnownAction =
  | accountType.GetDataAction
  | accountType.GetTokenAction
  | accountType.LogoutAction
  | HandleError;

// ACTION CREATOR
export const actionCreator = {
  login: ({
    email,
    password,
  }: accountType.LoginUser): AppThunkAction<KnownAction> => async (
    dispatch,
  ) => {
    const url: string = 'account/login';
    try {
      let response = await axios.post<
        accountType.LoginUser,
        accountType.PromiseHandler<accountType.LoginToken>
      >(url, {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: accountType.TypeAction.userToken,
          payload: response.data,
        });
      }
    } catch (err: any) {
      dispatch({ type: ErrorType.NotFound, error: '404' });
    }
  },
  logout: (): AppThunkAction<KnownAction> => async (dispatch) => {
    if (localStorage.getItem('token') !== null) {
      await localStorage.removeItem('token');
      dispatch({ type: accountType.TypeAction.logoutUser });
    }
  },
  registerAccount: ({
    email,
    password,
    confimPassword,
  }: accountType.RegisterUser): AppThunkAction<KnownAction> => async (
    dispatch,
  ) => {
    const url: string = 'account/register';
    try {
      const response = await axios.post<accountType.RegisterUser>(url, {
        email,
        password,
        confimPassword,
      });
      if (response.status !== 200) {
        throw new Error(response.status.toString());
      }
    } catch (err: any) {
      dispatch({ type: ErrorType.NotFound, error: err.message });
    }
  },
  getData: (): AppThunkAction<KnownAction> => async (dispatch) => {
    const url: string = 'account/getData';
    try {
      const response = await axios.get<
        null,
        accountType.PromiseHandler<accountType.GetData>
      >(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });

      if (response.status === 200) {
        dispatch({
          type: accountType.TypeAction.userData,
          payload: response.data,
        });
      } else {
        throw new Error(response.status.toString());
      }
    } catch (err: any) {
      dispatch({ type: ErrorType.Unauthorized, error: err.message });
    }
  },
};

export const reducer: Reducer<accountType.AccountState> = (
  state: accountType.AccountState | undefined,
  incomingAction: Action,
): accountType.AccountState => {
  if (state === undefined) {
    return {
      id: 0,
      email: '',
      username: '',
      roleName: '',
      RoleId: 0,
      token: '',
    };
  }

  const action = incomingAction as KnownAction;
  switch (action.type) {
    case accountType.TypeAction.userToken:
      return {
        ...state,
        token: '',
      };
    case accountType.TypeAction.userData:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        username: action.payload.username,
        roleName: action.payload.roleName,
        RoleId: action.payload.RoleId,
      };
    default:
      return state;
  }
};
