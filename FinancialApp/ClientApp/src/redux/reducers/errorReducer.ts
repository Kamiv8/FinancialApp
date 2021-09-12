import { Action, Reducer } from "redux";
import { AppThunkAction } from "./rootReducer";

export enum ErrorType {
  Unauthorized = "UNAUTHORIZED_TYPE",
  NotFound = 'NOT_FOUND',
  Default = 'DEFAULT_STATE',
  Created = 'CREATED',
  Success = 'SUCCESS',
  
}

export interface ErrorState{
    error: number;
    isTrue: boolean;
}

export interface HandleError{
  type: ErrorType;
  error: string;
}

export const actionCreator = {
  closeError: (): AppThunkAction<HandleError> => (dispatch) => {
    dispatch({type: ErrorType.Default, error: '0'});
  },
}; 

type ActionType = HandleError;

export const reducer: Reducer<ErrorState> = (state: ErrorState | undefined, incomingAction: Action): ErrorState => {


    if(state === undefined){
        return {
            error: 0,
            isTrue: false
        }
    }
    const action = incomingAction as ActionType;
    switch(action.type){
        case ErrorType.Unauthorized:
            return {
              error: +action.error,
              isTrue: true,
            }
          case ErrorType.NotFound:
            return{
              error: +action.error,
              isTrue: true
            }
          case ErrorType.Default:
            return {
              error: 0,
              isTrue: false
            }
            case ErrorType.Created:
              return {
                error: +action.error,
                isTrue: false
              }
              case ErrorType.Success:
                return {
                  error: +action.error,
                  isTrue: false
                }
        default: 
            return state;
    }

}
