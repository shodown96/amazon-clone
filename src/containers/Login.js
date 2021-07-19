import React, { useState } from 'react'
import "../css/Login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../config/config';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

        // some fancy firebase chiii
    const signIn = (e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            if(auth){
                // console.log("Login successful", auth.currentUser)
                history.push("/")
            }
        })
        .catch(err => alert(err.message))
    }
    const register = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(() => {
            // Registration successful
            if(auth){
                // console.log("Registration successful", auth.currentUser)
                history.push("/")
            }
        })
        .catch((err) =>{
            console.log("Registration failed", err)
        })
        // some fancy firebase register chiii
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
                alt="" className="login__logo"/>
             </Link>
             <div className="login__container">
                 <h1>Sign-in</h1>
                 <form>
                     <h5>E-mail</h5>
                     <input type="text" id="" value={email} onChange={e=> setEmail(e.target.value)}/>
                     <h5>Password</h5>
                     <input type="password" id="" value={password}  onChange={e=> setPassword(e.target.value)}/>
                     <button className="login__signInButton" onClick={signIn}>Sign In</button>
                 </form>
                 <p>
                     By signing-in you agree to The Amazon Clone's 
                     Conditions of Use & Sale. Please see our Privacy Notice,
                     our Cookies Notice and our Interest-based Ads.
                 </p>
                 <div class="a-divider a-divider-break"><h5>New to Amazon?</h5></div>
                 <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
             </div>
        </div>
    )
}

export default Login
