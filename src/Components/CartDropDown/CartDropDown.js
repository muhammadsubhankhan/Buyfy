import React from 'react'
import { connect } from 'react-redux'
import Button from '../Button/Button'
import CartDropdownItem from '../CartDropdownItem/CartDropdownItem'
import "./CartDropDown.css"
import {  Link} from "react-router-dom";
const CartDropDown = ({carItems}) => {
    return (
        <div className="Cart-dropdown-container">
        <div className="cart-dropdown-items">
            {carItems && carItems.map((item) => <CartDropdownItem key={item.id} item={item} />) }  
                   </div>
        <div className="cart-dropdown-btn flex">
        <Link to="./checkout">
        <Button backgroundColor="gray" fontSize={18} style={{width:"100%"}}>Check Out</Button>
        </Link> 
        </div>
        
        
        </div>
    )
}
var mapState = (state) => ({
    carItems : state.cart 
})

export default connect(mapState)(CartDropDown)
