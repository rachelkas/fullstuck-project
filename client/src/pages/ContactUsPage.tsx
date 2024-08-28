// import React from 'react';

// const ContactUsPage = () => {
//     return (
//         <div>ContactUsPage</div>
//     );
// }

// export default ContactUsPage;

















import React, { useState } from 'react';
import axios from 'axios';
import './contactUsPage.css'; // Import the CSS file for styling

const ContactUsPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post('/api/contact/send', { name, email, message });
            setSubmitted(true);
        } catch (err) {
            console.error('Failed to send email', err);
            setError('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>We would love to hear from you! Please fill out the form below to get in touch.</p>

            {submitted ? (
                <div className="thank-you-message">
                    <h3>Thank you for contacting us!</h3>
                    <p>We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            )}

            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default ContactUsPage;

