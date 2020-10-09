import React from 'react'
import Button from '../Button/Button'
import "./FormSwitcher.css"

const FormSwitcher = ({formType , setFormType}) => {
    
    return (
        <div className="form-switcher-container">
        <div className="switcher-signin">
           <Button onClick= {()=> setFormType("SignIn")} backgroundColor="transparent"> 
           <div style={{color: formType === "SignIn"? "black" : "#a8a8a8"}}> SIGN IN</div> 
           <div style={{background: formType === "SignIn " ? "blue" : "#a8a8a8"}} className="switcher-underline"></div>
           </Button>
        </div>
        
        <div className="switcher-signup">
        <Button onClick= {()=> setFormType("SignUp")}  backgroundColor="transparent"> 
           <div style={{color: formType === "SignUp"? "black" : "#a8a8a8"}}> SIGN UP</div> 
           <div style={{background: formType === "SignUp " ? "var(--primary-themess)" : "#a8a8a8"}} className="switcher-underline"></div>
           </Button>

        </div>
        </div>
    )
}

export default FormSwitcher
