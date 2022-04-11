import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleCreateUser = event => {
        signInWithEmailAndPassword(email, password)
        event.preventDefault()
    }
    if (user) {
        navigate('/shop')
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading ...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John?? <Link className='form-link' to='/signup'>Creat an account</Link></p>

                <div className='form-line'>
                    <hr />or <hr />
                </div>
                <div className='form-button-container' >
                    <button className='form-button'><img style={{ width: 25, hight: 20 }} src="google.png" alt="" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;