import React from 'react'
import computer from '../../assets/images/computer1.png'
import { CiHeart } from 'react-icons/ci'
const Products = () => {
    return (
        <div className='all-products'>
            <h2>Electronics devices</h2>
            <div className='product'>
                <h3>XPS 13 Laptop</h3>
                <img src={computer} alt="computer" />

                <div className='product-description'>
                    <p>
                        <span className='bold-text'>Memory (RAM) </span>
                        <span>Up to 64 GB</span>
                    </p>
                    <p>
                        <span className='bold-text'>Storage </span>
                        <span> Up to 2 TB</span>
                    </p>
                    <p>
                        <span className='bold-text'>Display </span>
                        <span> 34.0cm (13.4")</span>
                    </p>
                    <p><span className='bold-text'>price </span>
                        <span>$1,299.99</span></p>
                </div>
                <div><button type="button">Add to cart</button></div>
                <button><CiHeart /></button>
            </div>
        </div>
    )
}

export default Products