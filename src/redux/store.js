import { createStore, applyMiddleware, combineReducers } from "redux";
import { loginReducer } from "./reducers/login.reducer";
import thunk from "redux-thunk";
import logger from 'redux-logger';

const rootReducer = combineReducers({
    login: loginReducer
})

const middleware = [logger, thunk]
export const store = createStore(rootReducer, applyMiddleware(...middleware))