import React from 'react'
import "./ProductCard.css"
import Button from "./../Button/Button"
import { connect } from "react-redux";
import {addItemToCart} from "./../../Redux/Cart/cartActions";

 export var ProductCard = ({product , addItemToCart}) => {
     var  {name , cost ,imageUrl} = product
     
    return (
        <div className="product-card-container"> 
        <div className="product-card-hover">
        <Button onClick= { ()=> addItemToCart(product) }  backgroundColor= "pink" style={{width: "80%"}} >ADD TO CART</Button>
        <Button  backgroundColor= "pink" style={{width: "80%"}}  >VIEW PRODUCT</Button>
         </div>
        <div style={{background: `url(${imageUrl})` ,  backgroundSize: "100% 100% , cover"}} className="product-card-image"></div>
        <div className="product-card-info">
            <div className="product-card-info-name">{name}</div>
            <div className="product-card-info-price"> { `${cost}rs`}</div>
        </div>
        </div>
    )
}
var actions = {
    addItemToCart 
}

export default connect(null , actions)(ProductCard);