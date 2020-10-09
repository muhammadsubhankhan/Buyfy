import React, {useState} from 'react';
import "./SignUpForm.css";
import Button from "./../Button/Button"
import { connect } from "react-redux";
import {signup} from "./../../Redux/user/UserAction";
import  StyledInput from "./../StyledInput/StyledInput";

const SignUpForm = ({signup}) => {
    
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [fullName, setFullName] = useState("")
    var handleFormSubmit = (e) => {
      e.preventDefault()
      var auth = {
          fullName , 
          email  ,
          password};
          signup(auth)
  }
    return (
        <div className="signin-form-container">
        
        <form onSubmit={handleFormSubmit} className="signin-form">
        <div className="signin-form-fields">
        <StyledInput 
        value={fullName}
         placeholder="Enter Full Name"
          onChange={ (e) => setFullName(e.target.value) } 
          style={{margin:"1rem 0rem"}} />
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
        <Button style={{width: "100%"}}  color="white" backgroundColor="black" type="submit">SIGN UP</Button>
        </div>
        </form>
        </div>
    )
}
var actions = {
  signup
}

export default  connect(null , actions)(SignUpForm);
