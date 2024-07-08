// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AuthPage.css';

// const AuthPage: React.FC = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSwitch = () => {
//         setIsLogin(!isLogin);
//         setError('');
//     };

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         const url = isLogin ? '/api/auth/login' : '/api/auth/register';
//         const body = isLogin
//             ? { email, password }
//             : { firstname, lastname, email, password };

//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(body),
//         });

//         const data = await response.json();

//         if (response.ok) {
//             navigate('/');
//         } else {
//             if (isLogin && data.message === 'User not found') {
//                 // Switch to registration form if user not found during login
//                 setIsLogin(false);
//                 setError('User not found. Please register.');
//             } else {
//                 setError(data.message || 'Authentication failed');
//             }
//         }
//     };

//     return (
//         <div className="auth-container">
//             <h2>{isLogin ? 'Login' : 'Register'}</h2>
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit}>
//                 {!isLogin && (
//                     <>
//                         <input
//                             type="text"
//                             name="firstname"
//                             placeholder="First Name"
//                             value={firstname}
//                             onChange={(e) => setFirstname(e.target.value)}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="lastname"
//                             placeholder="Last Name"
//                             value={lastname}
//                             onChange={(e) => setLastname(e.target.value)}
//                             required
//                         />
//                     </>
//                 )}
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
//             </form>
//             <button onClick={handleSwitch}>
//                 {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
//             </button>
//         </div>
//     );
// };

// export default AuthPage;















import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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

    const validatePassword = (password: string) => {
        const regex = /^(?=.*[A-Za-z]{2,})(?=.*\d{8,}).{10,}$/;
        return regex.test(password);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setError('Password must contain at least 2 letters and 8 numbers.');
            return;
        }
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('auth-token', res.data.token);
            navigate('/');
        } catch (err: any) {
            if (err.response && err.response.status === 400) {
                if (err.response.data === 'Email or password is wrong') {
                    setIsLogin(false);
                } else {
                    setError(err.response.data);
                }
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validatePassword(password)) {
            setError('Password must contain at least 2 letters and 8 numbers.');
            return;
        }
        try {
            await axios.post('/api/auth/register', { firstname, lastname, email, password });
            setIsLogin(true);
            alert('Registration successful! Please log in.');
        } catch (err: any) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data);
            } else {
                setError('An unexpected error occurred.');
            }
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
                        <span onClick={() => setShowPassword(!showPassword)}>
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
                        <span onClick={() => setShowPassword(!showPassword)}>
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