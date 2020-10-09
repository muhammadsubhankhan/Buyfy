import React from "react";
import AuthForms from "../../Components/AuthForms/AuthForms";
import "./Auth.css";

const Auth = () => {
 
    return (
        <div className="auth-container">
            
            <div className="auth-img">auth image</div>
            <div className=" flex auth-form-area ">
            <AuthForms/>
             </div>
           
            </div>
        
    )
}

export default Auth;