import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import "./CartDropdownItem.css"
const CartDropdownItem = ( {item : {name  , imageUrl , quantity , cost , category} , 
                            }) => {
    return (
        <div className="class-dropdown-item-container">
            <div style={{background: `url(${imageUrl})` , backgroundSize: "100% 100% , cover"}} className="class-dropdown-item-img"></div>
            <div className="class-dropdown-item-info flex">
             <div>
             <Paragraph fontWeight="bold" fontSize={12}>{name}</Paragraph>
                <Paragraph fontSize={8}> {category}</Paragraph>
                <Paragraph fontSize={12}> { ` ${cost} x ${quantity}$`}</Paragraph>
             </div>
            </div>
            
        </div>
    )
}

export default CartDropdownItem
 