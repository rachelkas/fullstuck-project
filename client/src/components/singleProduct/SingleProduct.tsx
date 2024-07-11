import React from 'react';
import { CiHeart } from 'react-icons/ci';
import './singleProduct.css';

interface SingleProductProps {
    product: {
        productName: string;
        image: string;
        description: string | {
            memory: string;
            storage: string;
            display: string;
        };
        price: number;
    };
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
    const { productName, image, description, price } = product;

    const renderDescription = () => {
        if (typeof description === 'string') {
            return <p>{description}</p>;
        } else {
            return (
                <>
                    <p>
                        <span className='bold-text'>Memory (RAM): </span>
                        <span>{description.memory}</span>
                    </p>
                    <p>
                        <span className='bold-text'>Storage: </span>
                        <span>{description.storage}</span>
                    </p>
                    <p>
                        <span className='bold-text'>Display: </span>
                        <span>{description.display}</span>
                    </p>
                </>
            );
        }
    };

    return (
        <div className='single-product'>
            <h3>{productName}</h3>
            <img src={image} alt="product" />
            <div className='product-description'>
                {renderDescription()}
                <p>
                    <span className='bold-text'>Price: </span>
                    <span>${price}</span>
                </p>
            </div>
            <div>
                <button type="button">Add to cart</button>
            </div>
            <button>
                <CiHeart />
            </button>
        </div>
    );
}

export default SingleProduct;