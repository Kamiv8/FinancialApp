import * as User from './accountReducer';
import * as ErrorHandler from './errorReducer';

export interface ApplicationState {
  user: User.AccountState | undefined;
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