// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import api from '../utils/api';
// import { useNavigate } from 'react-router-dom';
// import { addProduct } from '../slices/productSlice';
// import { AppDispatch } from '../store';

// const AddProductPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const [productName, setProductName] = useState('');
//     const [price, setPrice] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState<File | null>(null);
//     const navigate = useNavigate();

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('productName', productName);
//         formData.append('price', price);
//         formData.append('description', description);
//         if (image) {
//             formData.append('image', image);
//         }
//         dispatch(addProduct(formData));
//     };

//     return (
//         <div className="add-product-page">
//             <h2>Add Product</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Product Name:</label>
//                     <input
//                         type="text"
//                         value={productName}
//                         onChange={(e) => setProductName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Price:</label>
//                     <input
//                         type="number"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Image:</label>
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                     />
//                 </div>
//                 <button type="submit">Add Product</button>
//             </form>
//         </div>
//     );
// };

// export default AddProductPage;











































// src/pages/AddProductPage.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Dispatch actions to the Redux store
import api from '../utils/api'; // Custom Axios instance
import { useNavigate } from 'react-router-dom'; // Navigation utility for redirecting
import { addProduct } from '../slices/productSlice'; // Action to add a new product
import { AppDispatch } from '../store'; // Typed version of Redux dispatch

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
        dispatch(addProduct(formData)); // Dispatch the action to add a product using the form data
    };

    return (
        <div className="add-product-page">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
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
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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
                </div>
                <div>
                    <label>Image:</label>
                    <input
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
