// // src/pages/AuthPage.tsx
// import React, { useState } from 'react';
// import { AxiosError } from 'axios'; // Import Axios and AxiosError from axios
// import { customAxios } from '../utils/api';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { AppDispatch, useAppDispatch } from '../store';
// import { useDispatch } from 'react-redux';
// import './authPage.css';
// import { loginUser } from '../services/authService';

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
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
//             loginUser({ email, password }, dispatch);
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
//             const res = await customAxios.post('/auth/register', {
//                 firstName,
//                 lastName,
//                 email,
//                 password,
//             });
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
//                             onChange={(e) => setFirstName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
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
















































// // src/pages/AuthPage.tsx
// import React, { useState } from 'react';
// import { AxiosError } from 'axios';
// import { customAxios } from '../utils/api';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { AppDispatch, useAppDispatch } from '../store';
// import { useDispatch } from 'react-redux';
// import './authPage.css';
// import { loginUser, registerUser, logoutUser } from '../services/authService'; // Import logoutUser

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
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
//             await loginUser({ email, password }, dispatch);
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
//             await registerUser({ firstName, lastName, email, password }, dispatch);
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

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         navigate('/log-in'); // Redirect to login page after logout
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
//                             onChange={(e) => setFirstName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
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
//             {isLogin && (
//                 <button onClick={handleLogout} className="logout-button">
//                     Logout
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AuthPage;











































































// // src/pages/AuthPage.tsx
// import React, { useState } from 'react';
// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RootState, AppDispatch } from '../store';
// import { customAxios } from '../utils/api';
// import { loginUser, registerUser, logoutUser } from '../services/authService';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const storedFirstName = useSelector((state: RootState) => state.user.userDetails.firstName);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await loginUser({ email, password }, dispatch);
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
//             await registerUser({ firstName, lastName, email, password }, dispatch);
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

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         navigate('/log-in');
//     };

//     return (
//         <div className="auth-container">
//             {isAuthenticated && (
//                 <div className="welcome-container">
//                     <span>Welcome, {storedFirstName}</span>
//                     <button onClick={handleLogout} className="logout-button">
//                         Logout
//                     </button>
//                 </div>
//             )}
//             {!isAuthenticated && (
//                 <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
//                     <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     {!isLogin && (
//                         <>
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                         </>
//                     )}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//                 </form>
//             )}
//             {!isAuthenticated && (
//                 <p>
//                     {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                     <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//                         {isLogin ? 'Register' : 'Login'}
//                     </button>
//                 </p>
//             )}
//         </div>
//     );
// };

// export default AuthPage;










































// src/pages/AuthPage.tsx
// import React, { useState, useEffect } from 'react';
// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RootState, AppDispatch } from '../store';
// import { loginUser, registerUser, logoutUser, updateUser } from '../services/authService';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userDetails = useSelector((state: RootState) => state.user.userDetails);

//     useEffect(() => {
//         if (isAuthenticated) {
//             setFirstName(userDetails.firstName);
//             setLastName(userDetails.lastName);
//             setEmail(userDetails.email);
//         }
//     }, [isAuthenticated, userDetails]);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await loginUser({ email, password }, dispatch);
//             navigate('/'); // Redirect to the homepage after successful login
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
//             await registerUser({ firstName, lastName, email, password }, dispatch);
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

//     const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await updateUser({ firstName, lastName, email, password }, dispatch);
//             alert('Profile updated successfully!');
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Update error', err.response?.data || err.message);
//                 setError('Update failed. Please check your details.');
//             } else {
//                 console.error('Update error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         navigate('/log-in');
//     };

//     return (
//         <div className="auth-container">
//             {isAuthenticated ? (
//                 <form onSubmit={handleUpdate} className="auth-form">
//                     <h2>Update Profile</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Update Profile</button>
//                     <button type="button" onClick={handleLogout} className="logout-button">
//                         Logout
//                     </button>
//                 </form>
//             ) : (
//                 <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
//                     <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     {!isLogin && (
//                         <>
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                         </>
//                     )}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//                 </form>
//             )}
//             {!isAuthenticated && (
//                 <p>
//                     {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                     <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//                         {isLogin ? 'Register' : 'Login'}
//                     </button>
//                 </p>
//             )}
//         </div>
//     );
// };

// export default AuthPage;



























































// // src/pages/AuthPage.tsx
// import React, { useState, useEffect } from 'react';
// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RootState, AppDispatch } from '../store';
// import { loginUser, registerUser, logoutUser, updateUser } from '../services/authService';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userDetails = useSelector((state: RootState) => state.user.userDetails);

//     useEffect(() => {
//         if (isAuthenticated) {
//             setFirstName(userDetails.firstName);
//             setLastName(userDetails.lastName);
//             setEmail(userDetails.email);
//             setIsLogin(false);
//         }
//     }, [isAuthenticated, userDetails]);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await loginUser({ email, password }, dispatch);
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
//             await registerUser({ firstName, lastName, email, password }, dispatch);
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

//     const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await updateUser({ firstName, lastName, email, password }, dispatch);
//             alert('Profile updated successfully!');
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Update error', err.response?.data || err.message);
//                 setError('Update failed. Please check your details.');
//             } else {
//                 console.error('Update error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         navigate('/');
//     };

//     return (
//         <div className="auth-container">
//             {isAuthenticated ? (
//                 <form onSubmit={handleUpdate} className="auth-form">
//                     <h2>Update Profile</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Update Profile</button>
//                     <button type="button" onClick={handleLogout} className="logout-button">
//                         Logout
//                     </button>
//                 </form>
//             ) : (
//                 <form onSubmit={handleLogin} className="auth-form">
//                     <h2>Login</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default AuthPage;















































// import React, { useState, useEffect } from 'react';
// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { RootState, AppDispatch } from '../store';
// import { loginUser, registerUser, logoutUser, updateUser } from '../services/authService';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);
//     const navigate = useNavigate();

//     const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
//     const userDetails = useSelector((state: RootState) => state.user.userDetails);

//     useEffect(() => {
//         if (isAuthenticated) {
//             setFirstName(userDetails.firstName);
//             setLastName(userDetails.lastName);
//             setEmail(userDetails.email);
//         }
//     }, [isAuthenticated, userDetails]);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await loginUser({ email, password }, dispatch);
//             navigate('/'); // Redirect to the homepage after successful login
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
//             await registerUser({ firstName, lastName, email, password }, dispatch);
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

//     const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await updateUser({ firstName, lastName, email, password }, dispatch);
//             alert('Profile updated successfully!');
//             navigate('/'); // Redirect to the homepage after successful update
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 console.error('Update error', err.response?.data || err.message);
//                 setError('Update failed. Please check your details.');
//             } else {
//                 console.error('Update error', err);
//                 setError('An unexpected error occurred. Please try again later.');
//             }
//         }
//     };

//     const handleLogout = () => {
//         logoutUser(dispatch);
//         navigate('/log-in');
//     };

//     const handleCancel = () => {
//         navigate('/'); // Redirect to the homepage when Cancel button is clicked
//     };

//     return (
//         <div className="auth-container">
//             {isAuthenticated ? (
//                 <form onSubmit={handleUpdate} className="auth-form">
//                     <h2>Update Profile</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                     />
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Update Profile</button>
//                     <button type="button" onClick={handleLogout} className="logout-button">
//                         Logout
//                     </button>
//                     <button type="button" onClick={handleCancel} className="cancel-button">
//                         Cancel
//                     </button>
//                 </form>
//             ) : (
//                 <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
//                     <h2>{isLogin ? 'Login' : 'Register'}</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     {!isLogin && (
//                         <>
//                             <input
//                                 type="text"
//                                 placeholder="First Name"
//                                 value={firstName}
//                                 onChange={(e) => setFirstName(e.target.value)}
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Last Name"
//                                 value={lastName}
//                                 onChange={(e) => setLastName(e.target.value)}
//                             />
//                         </>
//                     )}
//                     <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//                     <button type="button" onClick={handleCancel} className="cancel-button">
//                         Cancel
//                     </button>
//                 </form>
//             )}
//             {!isAuthenticated && (
//                 <p>
//                     {isLogin ? "Don't have an account?" : 'Already have an account?'}
//                     <button onClick={() => setIsLogin(!isLogin)} className="toggle-button">
//                         {isLogin ? 'Register' : 'Login'}
//                     </button>
//                 </p>
//             )}
//         </div>
//     );
// };

// export default AuthPage;






















// import React, { useState } from 'react';
// import { AxiosError } from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { AppDispatch } from '../store';
// import { loginUser, registerUser } from '../services/authService';
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [isLogin, setIsLogin] = useState(true);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await loginUser({ email, password }, dispatch);
//             navigate('/'); // Redirect to the homepage after successful login
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
//             await registerUser({ firstName, lastName, email, password }, dispatch);
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
//                             onChange={(e) => setFirstName(e.target.value)}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Last Name"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
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
// import { useDispatch } from 'react-redux';
// import { loginUser, registerUser } from '../services/authService';
// import { useNavigate } from 'react-router-dom';
// import { AxiosError } from 'axios';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons for password toggle
// import './authPage.css';

// const AuthPage: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [error, setError] = useState('');
//     const [isLogin, setIsLogin] = useState(true);
//     const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await loginUser({ email, password }, dispatch);
//             setError(''); // Clear error on successful login
//             navigate('/'); // Redirect to the homepage after successful login
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 setError('Login failed. Please check your credentials.');
//             } else {
//                 setError('An unexpected error occurred.');
//             }
//         }
//     };

//     const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//             await registerUser({ firstName, lastName, email, password }, dispatch);
//             alert('Registration successful! Please log in.');
//             setIsLogin(true); // Switch back to login after registration
//         } catch (err) {
//             if (err instanceof AxiosError) {
//                 setError('Registration failed. Please check your details.');
//             } else {
//                 setError('An unexpected error occurred.');
//             }
//         }
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className="auth-container">
//             {isLogin ? (
//                 <form onSubmit={handleLogin}>
//                     <h2>Login</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Login</button>
//                 </form>
//             ) : (
//                 <form onSubmit={handleRegister}>
//                     <h2>Register</h2>
//                     {error && <p className="error-message">{error}</p>}
//                     <input
//                         type="text"
//                         value={firstName}
//                         onChange={(e) => setFirstName(e.target.value)}
//                         placeholder="First Name"
//                     />
//                     <input
//                         type="text"
//                         value={lastName}
//                         onChange={(e) => setLastName(e.target.value)}
//                         placeholder="Last Name"
//                     />
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                     />
//                     <div className="password-container">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Password"
//                         />
//                         <span onClick={togglePasswordVisibility} className="password-toggle">
//                             {showPassword ? <FaEyeSlash /> : <FaEye />}
//                         </span>
//                     </div>
//                     <button type="submit">Register</button>
//                 </form>
//             )}

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
import { useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../services/authService'; // Import login and registration services
import { useNavigate } from 'react-router-dom'; // For navigating after authentication
import { AxiosError } from 'axios'; // AxiosError for error handling in try-catch blocks
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Icons for showing/hiding the password
import './authPage.css'; // Import the associated CSS for styling

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
            } else {
                setError('An unexpected error occurred.'); // Set generic error message for unexpected errors
            }
        }
    };

    // Function to handle registration submission
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission from refreshing the page
        try {
            await registerUser({ firstName, lastName, email, password }, dispatch); // Call registration service
            alert('Registration successful! Please log in.'); // Alert the user of successful registration
            setIsLogin(true); // Switch to the login view after successful registration
        } catch (err) {
            if (err instanceof AxiosError) {
                setError('Registration failed. Please check your details.'); // Set error message for registration failure
            } else {
                setError('An unexpected error occurred.'); // Set generic error message for unexpected errors
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
