import * as User from './accountReducer';
import * as ErrorHandler from './errorReducer';
import * as UserTypes from '../types/accountTypes';

export interface ApplicationState {
  user: UserTypes.AccountState | undefined;
  error: ErrorHandler.ErrorState | undefined;
}


export const RootReducer = {
  user: User.reducer,
  error: ErrorHandler.reducer,
};

export interface AppThunkAction<TAction>{
  (dispatch: (action: TAction) => void, 
  getState: () => ApplicationState): void;
}