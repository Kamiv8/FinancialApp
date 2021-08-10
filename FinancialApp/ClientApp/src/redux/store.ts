import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { RootReducer, ApplicationState } from "./reducers/rootReducer";


const configureStore = (initialState?: ApplicationState) => {

    const middleware =[thunk]
    const reducers = combineReducers({
        ...RootReducer,
    })

       const enhancers = [];
       const windowIfDefined =
         typeof window === "undefined" ? null : (window as any); // eslint-disable-line @typescript-eslint/no-explicit-any
       if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
         enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
       }

    return createStore(reducers,initialState,compose(applyMiddleware(...middleware),...enhancers));

}

export default configureStore;