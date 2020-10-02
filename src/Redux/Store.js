import {createStore , applyMiddleware} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension" 
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


var middlewares = [thunk]
var Store = createStore (rootReducer  )

export default Store;