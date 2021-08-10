import { Action, Reducer } from "redux";
import { AppThunkAction } from "./rootReducer";
import { ErrorType, HandleError} from "./errorReducer";

// TYPE ACTION FOR REDUX
export enum TypeAction {
  userData = "GET_USER_DATA",
  userToken = "GET_USER_TOKEN",
  logoutUser = "REMOVE_USER_TOKEN",
}
// STATE TYPE
export interface AccountState {
    id: number;
    email: string;
    username: string;
    roleName: string;
    RoleId?: number;
    token: string;
}




// ACTION type
export interface LoginToken {
  token: string;
}

interface LoginUser {
  email: string;
  password: string;
}

interface GetDataAction {
  type: TypeAction.userData;
  payload: GetData;
}
interface GetTokenAction{
    type: TypeAction.userToken;
    payload: LoginToken;
}
interface GetData {
  id: number;
  email: string;
  username: string;
  roleName: string;
  RoleId?: number;
}
interface LogoutAction {
    type: TypeAction.logoutUser
}

// ALL ACTION TYPE
type KnownAction = GetDataAction | GetTokenAction | LogoutAction | HandleError;

// ACTION CREATOR
export const actionCreator = {
  login: ({
    email,
    password,
  }: LoginUser): AppThunkAction<KnownAction> => async (dispatch) => {
    const url: string = "account/login";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json() as Promise<LoginToken>)
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch({ type: TypeAction.userToken, payload: data });
      })
      .catch((err) => {
        new Error(err.message);
      });
  },
  logout: (): AppThunkAction<KnownAction> => async (dispatch) => {
    if (localStorage.getItem("token") !== null) {
     await  localStorage.removeItem("token");
     dispatch({ type: TypeAction.logoutUser})
    }
  },
  getData: (): AppThunkAction<KnownAction> => async (dispatch) => {
    const url: string = "account/getData";
    try{
     const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
            if (!response.ok) {
              throw new Error(response.status.toString());
            }
        const data = await response.json();
        dispatch({ type: TypeAction.userData, payload: data });

    }
    catch(err: any){
       dispatch({ type: ErrorType.Unauthorized, error: err.message });
    }


  }
};

type AccountType = GetDataAction | GetTokenAction | LogoutAction;


export const reducer: Reducer<AccountState> = (state: AccountState | undefined, incomingAction: Action): AccountState =>{

    if(state === undefined){
        return {
            id: 0,
            email: "",
            username: "",
            roleName: "",
            RoleId: 0,
            token: "",

        };
    }

    const action = incomingAction as AccountType;
    switch(action.type){
        case TypeAction.userToken:
            return {
                ...state,
                token: "",
            }
        case TypeAction.userData:
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                roleName: action.payload.roleName,
                RoleId: action.payload.RoleId,
            }
        default:
            return state;
    }

}