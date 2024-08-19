// import React, { useState } from 'react';
// import axios from '../utils/api';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './authPage.css';
// import { useNavigate } from 'react-router-dom';

// const AuthPage: React.FC = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const validatePassword = (password: string) => {
//         const regex = /^(?=.*[A-Za-z]{2})(?=.*\d{6,6})[A-Za-z\d]{8}$/;
//         return regex.test(password);
//     };

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/auth/login', { email, password });
//             localStorage.setItem('token', res.data.token);
//             setError('');
//             navigate('/');
//         } catch (err: any) {
//             setError(err.response.data.msg);
//         }
//     };

//     const handleRegister = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!validatePassword(password)) {
//             setError('Password must contain 2 letters and 6 numbers. no special characters allowed');
//             return;
//         }
//         try {
//             const res = await axios.post('/auth/register', { firstName, lastName, email, password });
//             localStorage.setItem('token', res.data.token);
//             setError('');
//             alert('Registration successful! Please log in.');
//             setIsLogin(true);
//         } catch (err: any) {
//             setError(err.response.data.msg);
//         }
//     };

//     const clearError = () => setError('');

//     return (
//         <div className="auth-container" onClick={clearError}>
//             {isLogin ? (
//                 <form onSubmit={handleLogin} className="auth-form" onClick={(e) => e.stopPropagation()}>
//                     <h2>Login</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <span onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Login</button>
//                     <p>Don't have an account? <button type="button" onClick={() => { setIsLogin(false); clearError(); }}>Register</button></p>
//                 </form>
//             ) : (
//                 <form onSubmit={handleRegister} className="auth-form" onClick={(e) => e.stopPropagation()}>
//                     <h2>Register</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setfirstName(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setlastName(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <span onClick={() => setShowPassword(!showPassword)}>
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Register</button>
//                     <p>Already have an account? <button type="button" onClick={() => { setIsLogin(true); clearError(); }}>Login</button></p>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default AuthPage;

























// import React, { useState } from 'react';
// import axios from '../utils/api';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/auth/login', { email, password });
//             console.log(res); // Inspect the entire response
//             if (res.data && res.data.token) {
//                 localStorage.setItem('token', res.data.token);
//                 setError('');
//                 // Redirect to home or any other page
//             } else {
//                 setError('Unexpected response format');
//             }
//         } catch (err: any) {
//             console.error(err); // Inspect the error
//             setError(err.response ? err.response.data.msg : 'Login failed');
//         }
//     };

//     const handleRegister = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/auth/register', { firstName, lastName, email, password });
//             console.log(res); // Inspect the entire response
//             if (res.data && res.data.token) {
//                 localStorage.setItem('token', res.data.token);
//                 setError('');
//                 alert('Registration successful! Please log in.');
//                 setIsLogin(true);
//             } else {
//                 setError('Unexpected response format');
//             }
//         } catch (err: any) {
//             console.error(err); // Inspect the error
//             setError(err.response ? err.response.data.msg : 'Registration failed');
//         }
//     };

//     return (
//         <div className="auth-container">
//             {isLogin ? (
//                 <form onSubmit={handleLogin} className="auth-form">
//                     <h2>Login</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Login</button>
//                     <p>Don't have an account? <span onClick={() => setIsLogin(false)}>Register</span></p>
//                 </form>
//             ) : (
//                 <form onSubmit={handleRegister} className="auth-form">
//                     <h2>Register</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setfirstName(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setlastName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button type="submit">Register</button>
//                     <p>Already have an account? <span onClick={() => setIsLogin(true)}>Login</span></p>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default AuthPage;

















// import React, { useState } from 'react';
// import axios, { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
//     const navigate = useNavigate();

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/auth/login', { email, password });
//             localStorage.setItem('token', res.data.token);
//             navigate('/');
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Login error', err.response?.data || err.message);
//                 setError('Login failed. Please check your credentials.');
//             } else {
//                 console.error('Login error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/auth/register', { firstName, lastName, email, password });
//             localStorage.setItem('token', res.data.token);
//             alert('Registration successful! Please log in.');
//             setIsLogin(true);
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Registration error', err.response?.data || err.message);
//                 setError('Registration failed. Please check your details.');
//             } else {
//                 console.error('Registration error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
//                 <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                 {error && <p className="error-message">{error}</p>}
//                 {!isLogin && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             value={firstName}
//                             onChange={(e) => setfirstName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setlastName(e.target.value)}
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="password-container">
//                     <input
//                         type={showPassword ? 'text' : 'password'}
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <span onClick={togglePasswordVisibility} className="password-toggle">
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                 </div>
//                 <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//             </form>
//             <p>
//                 {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                 <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//                     {isLogin ? 'Register' : 'Login'}
//                 </button>
//             </p>
//         </div>
//     );
// };

// export default AuthPage;
































































// import React, { useState } from 'react';
// import axios, { AxiosError } from 'axios'; // Import Axios and AxiosError from axios
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
//     const navigate = useNavigate();

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
//             localStorage.setItem('token', res.data.token);
//             navigate('/');
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Login error', err.response?.data || err.message);
//                 setError('Login failed. Please check your credentials.');
//             } else {
//                 console.error('Login error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:3000/api/auth/register', { firstName, lastName, email, password });
//             localStorage.setItem('token', res.data.token);
//             alert('Registration successful! Please log in.');
//             setIsLogin(true);
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Registration error', err.response?.data || err.message);
//                 setError('Registration failed. Please check your details.');
//             } else {
//                 console.error('Registration error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
//                 <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                 {error && <p className="error-message">{error}</p>}
//                 {!isLogin && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             value={firstName}
//                             onChange={(e) => setfirstName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setlastName(e.target.value)}
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="password-container">
//                     <input
//                         type={showPassword ? 'text' : 'password'}
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <span onClick={togglePasswordVisibility} className="password-toggle">
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                 </div>
//                 <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//             </form>
//             <p>
//                 {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                 <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//                     {isLogin ? 'Register' : 'Login'}
//                 </button>
//             </p>
//         </div>
//     );
// };

// export default AuthPage;


































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



















































// import React, { useState } from 'react';
// import axios, { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/api/auth/login', { email, password });
//             localStorage.setItem('token', res.data.token);
//             navigate('/');
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Login error', err.response?.data || err.message);
//                 setError('Login failed. Please check your credentials.');
//             } else {
//                 console.error('Login error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/api/auth/register', { firstName, lastName, email, password });
//             localStorage.setItem('token', res.data.token);
//             alert('Registration successful! Please log in.');
//             setIsLogin(true);
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Registration error', err.response?.data || err.message);
//                 setError('Registration failed. Please check your details.');
//             } else {
//                 console.error('Registration error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     return (
//         <div className="auth-container">
//             <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
//                 <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                 {error && <p className="error-message">{error}</p>}
//                 {!isLogin && (
//                     <>
//                         <input
//                             type="text"
//                             placeholder="First Name"
//                             value={firstName}
//                             onChange={(e) => setfirstName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setlastName(e.target.value)}
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <div className="password-container">
//                     <input
//                         type={showPassword ? 'text' : 'password'}
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <span onClick={togglePasswordVisibility} className="password-toggle">
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                 </div>
//                 <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//             </form>
//             <p>
//                 {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                 <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//                     {isLogin ? 'Register' : 'Login'}
//                 </button>
//             </p>
//         </div>
//     );
// };

// export default AuthPage;
