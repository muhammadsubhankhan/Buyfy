import {combineReducers} from "redux";
import cartReducer from "./Cart/cartReducer";
import userReducer from "./user/UserReducer";

var rootReducer = combineReducers({
    currentUser : userReducer , 
    cart : cartReducer
});

export default rootReducer;