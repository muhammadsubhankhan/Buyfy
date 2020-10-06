import React from "react";
import { fontWeightParser } from "../../Utility/Utility";
import "./../Paragraph/Paragraph.css";

const Paragraph = (props) => {
    var { children ,
          fontColor="Black" ,
          fontWeight="regular" , 
          fontSize=16 ,  
          style = {}
        } = props;
   
    var fontWeightValue = fontWeightParser(fontWeight)
    return(
    <div style={{color:fontColor , fontWeight: fontWeightValue  , fontSize: `${fontSize / 10}rem` ,  ...style }} 
    className="paragraph-container">
     
    {children}
    </div>
    );
}

export default Paragraph;