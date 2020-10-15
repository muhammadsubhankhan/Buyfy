import { addItemToCartHelper } from "../../Utility/Utility";
import { ADD_ITEM_TO_CART } from "./cartConstants";

var initialState = [] ;
var cartReducer =(state = initialState , action) => {
    var { type , payload} = action;

    switch (type) {
        case ADD_ITEM_TO_CART:
            return addItemToCartHelper(state , payload.item)
        default:
            return state; 
    }
}

export default cartReducer; 