// src/pages/AuthPage.tsx
import React, { useState } from 'react';
import { AxiosError } from 'axios'; // Import Axios and AxiosError from axios
import { customAxios } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AppDispatch, useAppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import './authPage.css';
import { loginUser } from '../services/authService';

const AuthPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            loginUser({ email, password }, dispatch);
            navigate('/');
        } catch (err) {

            if (err instanceof AxiosError) {
                console.error('Login error', err.response?.data || err.message);
                setError('Login failed. Please check your credentials.');
            } else {
                console.error('Login error', err);
                setError('An unexpected error occurred. Please try again later.');
            }
        }
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await customAxios.post('/auth/register', {
                firstName,
                lastName,
                email,
                password,
            });
            localStorage.setItem('token', res.data.token);
            alert('Registration successful! Please log in.');
            setIsLogin(true);
        } catch (err) {
            if (err instanceof AxiosError) {
                console.error('Registration error', err.response?.data || err.message);
                setError('Registration failed. Please check your details.');
            } else {
                console.error('Registration error', err);
                setError('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                {error && <p className="error-message">{error}</p>}
                {!isLogin && (
                    <>
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </>
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={togglePasswordVisibility} className="password-toggle">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default AuthPage;
