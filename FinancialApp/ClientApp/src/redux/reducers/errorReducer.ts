import { Action, Reducer } from "redux";
export enum ErrorType {
  Unauthorized = "UNAUTHORIZED_TYPE",
}

export interface ErrorState{
    error: number;
    isTrue: boolean;
}

export interface HandleError{
  type: ErrorType;
  error: string;
}

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
        default: 
            return state;
    }

}
