import React, {useState} from "react"
import "./../StyledInput/StyledInput.css"

const StyledInput = (props) => {

    var {value ="", placeholder="label"  , ...restInputProps} =  props;
    var [focused , setFocus] =  useState(false);

    return( 
    <div className="styled-input-container flex">
        <div className="input-container">
            <input 
            onFocus={ ()=> setFocus(true)} 
            onBlur={ ()=> setFocus(false)}
             type="text" 
             {...restInputProps}
             value={value}/>
            <span className={`${ (focused || value) && "fousedLabel" }`}>{placeholder}</span>
            
        </div>
        <div className="input-outline-container flex"> 
         <div className={ `${(focused || value)  && "input-outline-filler-focused" }`}></div>
        </div>
    </div>);
}

export default StyledInput;