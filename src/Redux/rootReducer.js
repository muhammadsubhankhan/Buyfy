import { useReducer } from "react";
import {combineReducers} from "redux";
import userReducer from "./user/Reducer/UserReducer";

var rootReducer = combineReducers({
    currentUser : userReducer
});

export default rootReducer;