import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../services/authService'; // Import login and registration services
import { useNavigate } from 'react-router-dom'; // For navigating after authentication
import { AxiosError } from 'axios'; // AxiosError for error handling in try-catch blocks
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for showing/hiding the password
import './pages-style/authPage.css'; // Import the associated CSS for styling
import { toast } from 'react-toastify'; // Import toast for notifications

const AuthPage: React.FC = () => {
    const [email, setEmail] = useState(''); // State to store user email input
    const [password, setPassword] = useState(''); // State to store user password input
    const [firstName, setFirstName] = useState(''); // State to store user first name input (used in registration)
    const [lastName, setLastName] = useState(''); // State to store user last name input (used in registration)
    const [error, setError] = useState(''); // State to store error messages
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration views
    const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
    const dispatch = useDispatch(); // Use dispatch for triggering Redux actions
    const navigate = useNavigate(); // Navigation function to redirect after login or registration

    // Client-side password validation function
    const validatePassword = () => {
        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            toast.error('Password must be at least 8 characters long.', { toastId: 'password-error' });
            return false;
        }
        return true;
    };

    // Function to handle login submission
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        try {
            await loginUser({ email, password }, dispatch); // Call login service with user credentials
            setError(''); // Clear any existing error messages on successful login
            navigate('/'); // Redirect to the homepage upon successful login
        } catch (err) {
            if (err instanceof AxiosError) {
                setError('Login failed. Please check your credentials.'); // Set error message for login failure
                toast.error('Login failed. Please check your credentials.', { toastId: 'login-error' });
            } else {
                setError('An unexpected error occurred.'); // Set generic error message for unexpected errors
                toast.error('An unexpected error occurred.', { toastId: 'unexpected-error' });
            }
        }
    };

    // Function to handle registration submission
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        if (!validatePassword()) return; // Check password before proceeding
        try {
            await registerUser({ firstName, lastName, email, password }, dispatch); // Call registration service
            toast.success('Registration successful! Please log in.', { toastId: 'registration-success' }); // Show success toast
            alert('Registration successful! Please log in.'); // Show a browser alert
            setIsLogin(true); // Switch to the login view after successful registration
        } catch (err) {
            if (err instanceof AxiosError) {
                setError('Registration failed. Please check your details.'); // Set error message for registration failure
                toast.error('Registration failed. Please check your details.', { toastId: 'registration-error' });
            } else {
                setError('An unexpected error occurred.'); // Set generic error message for unexpected errors
                toast.error('An unexpected error occurred.', { toastId: 'unexpected-error' });
            }
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle between showing and hiding the password
    };

    return (
        <div className="auth-container">
            {/* Conditional rendering based on whether the user is logging in or registering */}
            {isLogin ? (
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle input type between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <span onClick={togglePasswordVisibility} className="password-toggle">
                            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icon to toggle password visibility */}
                        </span>
                    </div>
                    <button type="submit">Login</button> {/* Login button */}
                </form>
            ) : (
                <form onSubmit={handleRegister}>
                    <h2>Register</h2>
                    {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'} // Toggle input type between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <span onClick={togglePasswordVisibility} className="password-toggle">
                            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Icon to toggle password visibility */}
                        </span>
                    </div>
                    <button type="submit">Register</button> {/* Register button */}
                </form>
            )}

            {/* Toggle button to switch between login and register */}
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
