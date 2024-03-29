import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer as AuthReducer } from "./AuthReducer/reduder"


const rootReducer = combineReducers({AuthReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

