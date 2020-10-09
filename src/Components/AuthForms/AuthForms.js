import React, {useState} from 'react'
import FormsContainer from '../FormsContainer/FormsContainer'
import FormSwitcher from '../FormSwitcher/FormSwitcher'
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'

const AuthForms = () => {
    const [formType, setFormType] = useState("SignUp")
    return (
            <FormsContainer style={{transform:"translateX(-4rem)"}}>
             <div className="form-grid">
                <div className="form-switcher">
                    <FormSwitcher formType={formType} setFormType={setFormType}/>
                </div>
                <div className="form-fields">
                {formType === "SignIn" ? <SignInForm/> : <SignUpForm/>}
                </div>

             </div>
             </FormsContainer>
    )
}

export default AuthForms
