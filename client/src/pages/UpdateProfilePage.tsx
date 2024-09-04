import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../services/authService';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons
import { AxiosError } from 'axios';

const UpdateProfilePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.user.userDetails);

    // Pre-fill the form with the user's details
    const [firstName, setFirstName] = useState(userDetails.firstName || '');
    const [lastName, setLastName] = useState(userDetails.lastName || '');
    const [email, setEmail] = useState(userDetails.email || '');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
    const [error, setError] = useState('');

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateUser({ firstName, lastName, email, password }, dispatch);
            alert('Profile updated successfully!');
            navigate('/'); // Redirect to the homepage after update
        } catch (err) {
            if (err instanceof AxiosError) {
                setError('Update failed. Please check your details.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Cancel button handler
    const handleCancel = () => {
        navigate('/'); // Redirect to homepage when cancel is clicked
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleUpdate} className="auth-form">
                <h2>Update Profile</h2>
                {error && <p className="error-message">{error}</p>}
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
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'} // Toggle between text and password
                        placeholder="Password (optional)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span onClick={togglePasswordVisibility} className="password-toggle">
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Eye icon for visibility */}
                    </span>
                </div>

                <div className="button-group">
                    <button type="submit">Update Profile</button>
                    <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfilePage;

