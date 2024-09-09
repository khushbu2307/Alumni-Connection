import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import { signInWithGoogle, signInWithFacebook } from './authService'; // Import authentication functions

function Signup({ onSignupSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        isWorking: false,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignupSubmit();
        navigate('/');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithGoogle();
            navigate('/');
        } catch (error) {
            console.error('Google Signup Error:', error);
        }
    };

    const handleFacebookSignup = async () => {
        try {
            await signInWithFacebook();
            navigate('/');
        } catch (error) {
            console.error('Facebook Signup Error:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-wrapper">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
                    <div className="toggle-container">
                        <input type="checkbox" name="isWorking" checked={formData.isWorking} onChange={handleChange} />
                        <label>Are you currently working in any place?</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div className="social-signup">
                <a href="/auth/google">
                    <FaGoogle /> Sign up with Google
                </a>
                <a href="/auth/facebook">
                    <FaFacebook /> Sign up with Facebook
                </a>
            </div>
                <p>Already have an account? <span onClick={handleLoginClick}>Login</span></p>
            </div>
        </div>
    );
}

export default Signup;
