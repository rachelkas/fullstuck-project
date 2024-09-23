// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './loginPage.css'; // Import CSS file

// const LoginPage: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         const response = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//             // Handle successful login, e.g., save token and navigate to a different page
//             navigate('/home');
//         } else {
//             // Handle login failure, e.g., show an error message
//             console.error('Login failed');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
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
//                 <button type="submit">Login</button>
//             </form>
//             <a href="/register" className="register-link">Don't have an account? Register</a>
//         </div>
//     );
// };

// export default LoginPage;










































// // src/pages/LoginPage.tsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './loginPage.css'; // Import CSS file

// const LoginPage: React.FC = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         const response = await fetch('/api/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         });

//         if (response.ok) {
//             // Handle successful login, e.g., save token and navigate to a different page
//             navigate('/home');
//         } else {
//             // Handle login failure, e.g., show an error message
//             console.error('Login failed');
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
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
//                 <button type="submit">Login</button>
//             </form>
//             <a href="/register" className="register-link">
//                 Don't have an account? Register
//             </a>
//         </div>
//     );
// };

// export default LoginPage;


































// src/pages/LoginPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; // Import CSS file

// LoginPage component for user login
const LoginPage: React.FC = () => {
    const [email, setEmail] = useState(''); // State to handle email input
    const [password, setPassword] = useState(''); // State to handle password input
    const navigate = useNavigate(); // Use navigate to redirect the user after login

    // Handle form submission for login
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Make a POST request to the login API
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Send email and password as request body
        });

        if (response.ok) {
            // If login is successful, navigate to the home page
            navigate('/home');
        } else {
            // If login fails, log an error message
            console.error('Login failed');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state when input changes
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state when input changes
                    required
                />
                <button type="submit">Login</button> {/* Submit button to trigger form submission */}
            </form>
            <a href="/register" className="register-link">
                Don't have an account? Register {/* Link to redirect to the register page */}
            </a>
        </div>
    );
};

export default LoginPage;
