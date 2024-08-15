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










































// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css'; // Import CSS file

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // Handle successful login, e.g., save token and navigate to a different page
            navigate('/home');
        } else {
            // Handle login failure, e.g., show an error message
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <a href="/register" className="register-link">
                Don't have an account? Register
            </a>
        </div>
    );
};

export default LoginPage;
