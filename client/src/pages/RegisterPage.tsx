// // src/pages/RegisterPage.tsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RegisterPage: React.FC = () => {
//     const [firstName, setfirstName] = useState('');
//     const [lastName, setlastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         const response = await fetch('/api/auth/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ firstName, lastName, email, password }),
//         });

//         if (response.ok) {
//             navigate('/log-in');
//         } else {
//             console.error('Registration failed');
//         }
//     };

//     return (
//         <div className="register-container">
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={firstName}
//                     onChange={(e) => setfirstName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={lastName}
//                     onChange={(e) => setlastName(e.target.value)}
//                     required
//                 />
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
//                 <button type="submit">Register</button>
//             </form>
//             <a href="/log-in" className="login-link">
//                 Already have an account? Login
//             </a>
//         </div>
//     );
// };

// export default RegisterPage;





















































// src/pages/RegisterPage.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This component handles user registration
// It contains a form where users can enter their first name, last name, email, and password
const RegisterPage: React.FC = () => {
    // State variables to manage input values
    const [firstName, setfirstName] = useState('');  // State for first name input
    const [lastName, setlastName] = useState('');    // State for last name input
    const [email, setEmail] = useState('');          // State for email input
    const [password, setPassword] = useState('');    // State for password input
    const navigate = useNavigate();                  // Hook to programmatically navigate to another page

    // Handle form submission to register the user
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();  // Prevent default form submission behavior

        // Send a POST request to the registration API
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Send input values in the request body
            body: JSON.stringify({ firstName, lastName, email, password }),
        });

        // If registration is successful, redirect to login page
        if (response.ok) {
            navigate('/log-in');  // Navigate to the login page
        } else {
            console.error('Registration failed');  // Handle registration failure
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {/* Registration form */}
            <form onSubmit={handleSubmit}>
                {/* Input for first name */}
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    required
                />
                {/* Input for last name */}
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    required
                />
                {/* Input for email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {/* Input for password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {/* Submit button */}
                <button type="submit">Register</button>
            </form>
            {/* Link to login page */}
            <a href="/log-in" className="login-link">
                Already have an account? Login
            </a>
        </div>
    );
};

export default RegisterPage;
