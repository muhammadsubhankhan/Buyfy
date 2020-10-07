import {combineReducers} from "redux";
import userReducer from "./user/UserReducer";

var rootReducer = combineReducers({
    currentUser : userReducer
});

export default rootReducer;