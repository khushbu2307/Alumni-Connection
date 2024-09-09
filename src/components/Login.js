import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithGoogle, signInWithFacebook } from './authService'; // Import authentication functions
import { FaGoogle, FaFacebook } from 'react-icons/fa'; // Import the icons

function Login({ onLoginSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLoginSubmit();
        navigate('/');
    };

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            navigate('/');
        } catch (error) {
            console.error('Google Login Error:', error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await signInWithFacebook();
            navigate('/');
        } catch (error) {
            console.error('Facebook Login Error:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form-wrapper">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    <button type="submit">Login</button>
                </form>
                <div className="social-login-buttons">
                    <a href="#" onClick={handleGoogleLogin} className="social-button">
                        <FaGoogle className="social-icon" /> Login with Google
                    </a>
                    <a href="#" onClick={handleFacebookLogin} className="social-button">
                        <FaFacebook className="social-icon" /> Login with Facebook
                    </a>
                </div>
                <p>Don't have an account? <span onClick={handleSignupClick}>Sign Up</span></p>
            </div>
        </div>
    );
}

export default Login;
