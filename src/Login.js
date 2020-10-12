import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        // some fancy firebase login stuff...
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            // it successfully created a new userwith email and password
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

        // some fancy firebase register stuff...
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    {/* track when user types in, onChange is triggered, gives us an event */}
                    <input type="text" value={email} onChange=
                    {e /* event is paired with=> */ => setEmail(e.target.value /* =>what user typed in */)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Amazon FAKE CLONE Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookies Notice 
                    and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;
