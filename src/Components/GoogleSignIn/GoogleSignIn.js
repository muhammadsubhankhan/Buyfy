import React from 'react'
import { connect } from 'react-redux'
import { googleLogin } from '../../Redux/user/UserAction'
import Button from '../Button/Button'

const GoogleSignin = (props) => {
    var {googleLogin} = props
    return (
        <Button color="white" backgroundColor="black" type="submit" onClick={ googleLogin}> GOOGLE SIGNIN

        </Button>
        )
}
var actions= {
    googleLogin
}

export default connect(null, actions) (GoogleSignin)