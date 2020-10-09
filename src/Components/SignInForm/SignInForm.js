import React, {useState} from 'react';
import "./SignInForm.css";
import Button from "./../Button/Button"
import { connect } from "react-redux";
import {signin} from "./../../Redux/user/UserAction";

import  StyledInput from "./../StyledInput/StyledInput";
import Paragraph from '../Paragraph/Paragraph';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
const SignInForm = ({signin}) => {

    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")

    var handleFormSubmit = (e) => {
        e.preventDefault()
        var auth = {
            email  ,
            password};
            signin(auth)
    }
    return (
        <div className="signin-form-container">
        
        <form onSubmit={handleFormSubmit} className="signin-form">
        <div className="signin-form-fields">
        <StyledInput 
        value={email}
         placeholder="Enter Email"
          onChange={ (e) => setEmail(e.target.value) } 
          style={{margin:"1rem 0rem"}} />
            <StyledInput 
        value={password}
         placeholder="Enter passowrd"
          onChange={ (e) => setPassword(e.target.value) }
          style={{margin:"1rem 0rem"}}  />
        </div>
        
        <div className="signin-form-btn">
        <div>        <Button style={{width:"91%"}}  color="white" backgroundColor="black" type="submit">SIGN IN</Button></div>
        
        <div className="signin-seperator">
            <div className="signin-or-line"></div>
            <div className="signin-or flex"> <Paragraph fontSize={12}> OR</Paragraph></div>
            <div className="signin-or-line"></div>
        </div>
       
        <div>       
        <GoogleSignIn/>
        </div>
        </div>
        </form>
        </div>
    )
}
var actions = {
    signin
}

export default connect(null , actions) (SignInForm)
