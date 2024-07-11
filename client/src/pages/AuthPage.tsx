import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons from react-icons
import api from '../utils/api'; // Import the Axios instance
import './authPage.css';

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err: any) {
            setError(err.response.data.msg || 'An error occurred');
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/register', { firstname, lastname, email, password });
            localStorage.setItem('token', res.data.token);
            alert('Registration successful! Please log in.');
            setIsLogin(true);
        } catch (err: any) {
            setError(err.response.data.msg || 'An error occurred');
        }
    };

    return (
        <div className="auth-container">
            {isLogin ? (
                <form onSubmit={handleLogin} className="auth-form">
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <button type="button" onClick={() => setIsLogin(false)}>Register</button></p>
                </form>
            ) : (
                <form onSubmit={handleRegister} className="auth-form">
                    <h2>Register</h2>
                    {error && <p className="error-message">{error}</p>}
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button type="submit">Register</button>
                    <p>Already have an account? <button type="button" onClick={() => setIsLogin(true)}>Login</button></p>
                </form>
            )}
        </div>
    );
};

export default AuthPage;