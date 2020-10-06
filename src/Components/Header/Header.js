import React from "react";
import { fontWeightParser } from "../../Utility/Utility";
import "./../Header/Header.css";


const Header = (props) => {
    var { children ,
          fontColor="Black" ,
          fontWeight="regular" , 
          fontSize=40 ,  
          style = {}
        } = props;
   
    var fontWeightValue = fontWeightParser(fontWeight)
    return(
    <div style={{color:fontColor , fontWeight: fontWeightValue  , fontSize: `${fontSize / 10} rem` ,  ...style }} 
    className="header-container">
     
    {children}
    </div>
    );
}

export default Header;