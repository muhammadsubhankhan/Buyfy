import {combineReducers} from "redux";
import userReducer from "./user/Reducer/userReducer";

var rootReducer = combineReducers({
    currentUser : userReducer
});

export default rootReducer;