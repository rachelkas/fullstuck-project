// src/pages/AddProductPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Dispatch actions to the Redux store
import api from '../utils/api'; // Custom Axios instance
import { useNavigate } from 'react-router-dom'; // Navigation utility for redirecting
import { addProduct } from '../slices/productSlice'; // Action to add a new product
import { AppDispatch } from '../store'; // Typed version of Redux dispatch
import { ToastContainer, toast } from 'react-toastify'; // Toast notification
import 'react-toastify/dist/ReactToastify.css'; // Import default toastify styles
import './pages-style/addProductPage.css'; // Import the CSS file

const AddProductPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch(); // Get the dispatch function to trigger actions
    const [productName, setProductName] = useState(''); // Local state to store the product name
    const [price, setPrice] = useState(''); // Local state to store the product price
    const [description, setDescription] = useState(''); // Local state to store the product description
    const [image, setImage] = useState<File | null>(null); // Local state to store the product image (as a file)
    const navigate = useNavigate(); // Navigation function to redirect after product creation

    // Handle image selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]); // Update the image file state when a file is selected
        }
    };

    // Handle form submission for adding a new product
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(); // Create a FormData object to send data, including files
        formData.append('productName', productName); // Add the product name to the form data
        formData.append('price', price); // Add the price to the form data
        formData.append('description', description); // Add the description to the form data
        if (image) {
            formData.append('image', image); // Add the image file to the form data
        }

        try {
            // Dispatch the action to add a product using the form data
            await dispatch(addProduct(formData)).unwrap(); // Wait for the product to be added successfully

            // Show success toast notification
            toast.success('A new product was added!', {
                position: "top-right",
                autoClose: 3000, // Auto close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Redirect to the homepage after 3 seconds (after the toast displays)
            setTimeout(() => {
                navigate('/');
            }, 3000); // Redirect after the toast
        } catch (error) {
            // Show error toast notification in case of failure
            toast.error('Failed to add product. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="add-product-page">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className='add-product-label'>
                    <div>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => {
                                // Allow only numbers and dot for decimal values
                                const value = e.target.value;
                                if (/^\d*\.?\d*$/.test(value)) {
                                    setPrice(value);
                                }
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div> </div>
                <div className="file-input-container">
                    <label htmlFor="file-upload" className="custom-file-upload">
                        Choose Image
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductPage;
