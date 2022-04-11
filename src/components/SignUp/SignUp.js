import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, SetConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        SetConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = event => {
        if (password !== confirmPassword) {
            setError('Your Two PassWord did not match')
            return
        }
        if (password.length > 6) {
            setError('password must be 6 characters or longer')
        }
        event.preventDefault()

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm-Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already Have An Account?? <Link className='form-link' to='/login'>Login</Link></p>

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

export default SignUp;