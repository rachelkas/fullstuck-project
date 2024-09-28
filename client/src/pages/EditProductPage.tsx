// src/pages/EditProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../slices/productSlice';
import { RootState, AppDispatch } from '../store';
import './pages-style/editProductPage.css';

const EditProductPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const product = useSelector((state: RootState) => getProductById(state, productId!));
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: product?.productName || '',
        price: product?.price || '',
        description: product?.description || '',
        image: product?.image || null, // Handle image file
        imageUrl: product?.image
    });

    useEffect(() => {
        if (product) {
            setFormData({
                productName: product.productName,
                price: product.price,
                description: product.description,
                image: product.image,
                imageUrl: product.image
            });
        }
    }, [product]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const url = URL.createObjectURL(e.target.files[0]);
            setFormData({ ...formData, image: e.target.files[0], imageUrl: url });
        }
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const updatedProductData = new FormData();
        updatedProductData.append('productName', formData.productName);
        updatedProductData.append('price', formData.price);
        updatedProductData.append('description', formData.description);
        if (formData.image) {
            updatedProductData.append('image', formData.image); // Add image to the form data if it was changed
        }

        await dispatch(updateProduct({ productData: updatedProductData, productId }));
        navigate('/');
    };


    return (
        <div className="edit-product-container">
            <h1>Edit Product</h1>
            {product ? (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        id="productName"
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                    />

                    <label htmlFor="price">Price:</label>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />

                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <label htmlFor="productImageId">Image:</label>
                    <img src={formData.imageUrl} alt="Product" />
                    <label htmlFor="productImageId">Choose Image</label>
                    <input
                        id="productImageId"
                        type="file"
                        style={{ visibility: "hidden" }}
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />

                    <button className='Update-Product-button' type="submit">Update Product</button>
                </form>
            ) : (
                <p>Loading product...</p>
            )}

            <button className='Update-Product-Cancel-button' onClick={() => navigate('/')}>Cancel</button>
        </div>
    );
};

export default EditProductPage;
