import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./../Button/Button.css";

const Button = (props) => {
    var {children , fontSize= 12 ,  backgroundColor="#4287f5" ,  style , color="black" ,  ...restProps } = props;
    return(
        <button {...restProps  } style={{...style , background:backgroundColor}} className="button-container">
            <Paragraph fontColor={color} style={{letterSpacing: " 0.2rem" }} fontSize={fontSize} >{children}</Paragraph>
        </button>
    );
}

export default Button;