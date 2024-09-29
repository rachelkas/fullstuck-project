// src/pages/UpdateProfilePage.tsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../services/authService';  // Import the updateUser service
import { RootState } from '../store';  // Import RootState for typing the Redux state
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons for password visibility toggle
import { AxiosError } from 'axios';
import './pages-style/UpdateProfilePage.css';

const UpdateProfilePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.user.userDetails) || {};  // Access user details from Redux store
    const token = useSelector((state: RootState) => state.user.token);  // Get the token from Redux

    // Pre-fill the form with the user's details from Redux
    const [firstName, setFirstName] = useState(userDetails.firstName || '');
    const [lastName, setLastName] = useState(userDetails.lastName || '');
    const [email, setEmail] = useState(userDetails.email || '');
    const [password, setPassword] = useState('');  // Password field is initially empty
    const [showPassword, setShowPassword] = useState(false);  // For toggling password visibility
    const [error, setError] = useState('');  // Handle any error messages

    // Handle profile update form submission
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Ensure the token exists, otherwise redirect to login
        if (!token) {
            alert('Your session has expired. Please log in again.');
            navigate('/log-in');
            return;
        }

        try {
            // Call the updateUser service to update the profile with the provided token
            await updateUser({ firstName, lastName, email }, token, dispatch);
            alert('Profile updated successfully!');
            navigate('/');  // Redirect to homepage after successful update
        } catch (err) {
            // Handle errors related to Axios and display an error message
            if (err instanceof AxiosError) {
                setError('Update failed. Please check your details.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Cancel the update process and redirect to the homepage
    const handleCancel = () => {
        navigate('/');  // Redirect to homepage when cancel is clicked
    };

    return (
        <div className="update-profile-container">
            {/* Form to update profile */}
            <form onSubmit={handleUpdate} className="update-profile-form">
                <h2>Update Profile</h2>
                {error && <p className="error-message">{error}</p>}  {/* Display error messages if any */}

                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}  // Update first name in state
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}  // Update last name in state
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  // Update email in state
                />

                <div className="button-group">
                    <button type="submit">Update Profile</button>
                    <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfilePage;
