import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addProduct, getProductById, updateProduct } from '../slices/productSlice';
import { AppDispatch, RootState } from '../store';

const EditProductPage: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { productId } = useParams();
    const product = useSelector((state: RootState) => (getProductById(state, productId))) || {};
    const [productName, setProductName] = useState(product.productName || '');
    const [price, setPrice] = useState(product.price || '');
    const [description, setDescription] = useState(product.description || '');
    const [image, setImage] = useState<File | null>(product.image || null);
    const navigate = useNavigate();

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        const data = {
            productData: formData,
            productId
        }
        dispatch(updateProduct(data));
    };

    return (
        <div className="add-product-page">
            <h2>Edit Product</h2>
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
                <button type="submit">Edit Product</button>
            </form>
        </div>
    );
};

export default EditProductPage;
