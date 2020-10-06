import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./../Button/Button.css";

const Button = (props) => {
    var {children , ...restProps} = props;
    return(
        <button {...restProps} className="button-container">
            <Paragraph style={{letterSpacing: " 0.2rem"}} >{children}</Paragraph>
        </button>
    );
}

export default Button;