// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux'
// import api from '../utils/api';
// import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { addProduct, getProductById, updateProduct } from '../slices/productSlice';
// import { AppDispatch, RootState } from '../store';

// const EditProductPage: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//     const { productId } = useParams();
//     const product = useSelector((state: RootState) => (getProductById(state, productId))) || {};
//     const [productName, setProductName] = useState(product.productName || '');
//     const [price, setPrice] = useState(product.price || '');
//     const [description, setDescription] = useState(product.description || '');
//     const [image, setImage] = useState<File | null>(product.image || null);
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
//         const data = {
//             productData: formData,
//             productId
//         }
//         dispatch(updateProduct(data));
//     };

//     return (
//         <div className="add-product-page">
//             <h2>Edit Product</h2>
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
//                 <button type="submit">Edit Product</button>
//             </form>
//         </div>
//     );
// };

// export default EditProductPage;























































// // src/pages/EditProductPage.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getProductById, updateProduct } from '../slices/productSlice';
// import { RootState, AppDispatch } from '../store';

// const EditProductPage: React.FC = () => {
//     const { productId } = useParams<{ productId: string }>();
//     const product = useSelector((state: RootState) => getProductById(state, productId!));
//     const dispatch: AppDispatch = useDispatch();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         productName: product?.productName || '',
//         price: product?.price || '',
//         description: product?.description || '',
//     });

//     useEffect(() => {
//         if (product) {
//             setFormData({
//                 productName: product.productName,
//                 price: product.price,
//                 description: product.description,
//             });
//         }
//     }, [product]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         await dispatch(updateProduct({ productData: formData, productId }));
//         navigate('/');
//     };

//     return (
//         <div>
//             <h1>Edit Product</h1>
//             {product ? (
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="productName"
//                         value={formData.productName}
//                         onChange={handleChange}
//                         placeholder="Product Name"
//                     />
//                     <input
//                         type="number"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleChange}
//                         placeholder="Price"
//                     />
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         placeholder="Description"
//                     />
//                     <label>Image:</label>
//                     <input type="file"
//                     name='image'
//                     accept='image/*'
//                     onChange={(e) => setFormData({ ...formData, image: e.target.files![0] })}
//                     placeholder='Image'
//                     />

//                     <button type="submit">Update Product</button>
//                 </form>
//             ) : (
//                 <p>Loading product...</p>
//             )}
//         </div>
//     );
// };

// export default EditProductPage;





































// // src/pages/EditProductPage.tsx
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getProductById, updateProduct } from '../slices/productSlice';
// import { RootState, AppDispatch } from '../store';

// const EditProductPage: React.FC = () => {
//     const { productId } = useParams<{ productId: string }>();
//     const product = useSelector((state: RootState) => getProductById(state, productId!));
//     const dispatch: AppDispatch = useDispatch();
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         productName: product?.productName || '',
//         price: product?.price || '',
//         description: product?.description || '',
//         image: product?.image || null, // Handle image file
//         imageUrl: product?.image
//     });

//     useEffect(() => {
//         if (product) {
//             setFormData({
//                 productName: product.productName,
//                 price: product.price,
//                 description: product.description,
//                 image: product.image,
//                 imageUrl: product.image
//             });
//         }
//     }, [product]);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files && e.target.files[0]) {
//             const url = URL.createObjectURL(e.target.files[0]);
//             setFormData({ ...formData, image: e.target.files[0], imageUrl: url });
//         }
//     };


//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         const updatedProductData = new FormData();
//         updatedProductData.append('productName', formData.productName);
//         updatedProductData.append('price', formData.price);
//         updatedProductData.append('description', formData.description);
//         if (formData.image) {
//             updatedProductData.append('image', formData.image); // Add image to the form data if it was changed
//         }

//         await dispatch(updateProduct({ productData: updatedProductData, productId }));
//         navigate('/');
//     };


//     return (
//         <div>
//             <h1>Edit Product</h1>
//             {product ? (
//                 <form onSubmit={handleSubmit} encType="multipart/form-data">
//                     <input
//                         type="text"
//                         name="productName"
//                         value={formData.productName}
//                         onChange={handleChange}
//                         placeholder="Product Name"
//                     />
//                     <input
//                         type="number"
//                         name="price"
//                         value={formData.price}
//                         onChange={handleChange}
//                         placeholder="Price"
//                     />
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         placeholder="Description"
//                     />
//                     <label>Image:</label>
//                     <img src={formData.imageUrl} alt="Product" style={{ maxWidth: '100px' }} />
//                     <label htmlFor="productImageId">שנה תמונת מוצר</label>
//                     <input
//                         id="productImageId"
//                         type="file"
//                         style={{ visibility: "hidden" }}
//                         name="image"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                     />
//                     <button type="submit">Update Product</button>
//                 </form>
//             ) : (
//                 <p>Loading product...</p>
//             )}

//             <button onClick={() => navigate('/')}>Cancel</button>

//         </div>
//     );
// };

// export default EditProductPage;

























































// src/pages/EditProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../slices/productSlice';
import { RootState, AppDispatch } from '../store';

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
        <div>
            <h1>Edit Product</h1>
            {product ? (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Product Name"
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    <label>Image:</label>
                    <img src={formData.imageUrl} alt="Product" style={{ maxWidth: '100px' }} />
                    <label htmlFor="productImageId">שנה תמונת מוצר</label>
                    <input
                        id="productImageId"
                        type="file"
                        style={{ visibility: "hidden" }}
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit">Update Product</button>
                </form>
            ) : (
                <p>Loading product...</p>
            )}

            <button onClick={() => navigate('/')}>Cancel</button>

        </div>
    );
};

export default EditProductPage;
