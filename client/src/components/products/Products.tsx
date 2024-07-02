// import React from 'react';
// import computer from '../../assets/images/computer1.png';
// import bluetooth from '../../assets/images/bluetooth.png';
// import SingleProduct from '../singleProduct/SingleProduct';
// import computerbag from '../../assets/images/computerbag.png';
// import mp3 from '../../assets/images/mp3.png';
// import Projector from '../../assets/images/projector.png';
// import tablet from '../../assets/images/tablet.png';


// const Products: React.FC = () => {
//     return (
//         <div className='all-products'>
//             <h2>Electronics devices</h2>
//             <div className='products-list'>
//                 <SingleProduct
//                     product={{
//                         productName: 'XPS 13 Laptop',
//                         image: computer,
//                         description: {
//                             memory: 'Up to 64 GB',
//                             storage: 'Up to 2 TB',
//                             display: '34.0cm (13.4")'
//                         },
//                         price: 1299.99
//                     }}
//                 />
//                 <SingleProduct
//                     product={{
//                         productName: 'Portable Bluetooth Speaker',
//                         image: bluetooth,
//                         description: 'Wireless Speaker with HD Sound, Rich Bass, 12H Playtime & Built-in Mic.',
//                         price: 44.99
//                     }}
//                 />

//                 <SingleProduct product={{
//                     productName: 'Computer bag',
//                     image: computerbag,
//                     description: 'Laptop bag 12/13 sleeve. 3/14/15.6 inch notebook sleeve for macbook',
//                     price: 21.35
//                 }} />

//                 <SingleProduct product={{
//                     productName: 'MP3 player',
//                     image: mp3,
//                     description: 'MP3 Player 1.8 Inch Color Screen Mini BlueTooth',
//                     price: 37
//                 }} />

//                 <SingleProduct product={{
//                     productName: 'Projector',
//                     image: Projector,
//                     description: 'ED projector in HD resolution for a variety of uses such as home cinema and more.',
//                     price: 380
//                 }} />
//                 <SingleProduct product={{
//                     productName: 'Tablet',
//                     image: tablet,
//                     description: 'Tablet 10.1 inch Android 12 Tablet 2023 Latest Update',
//                     price: 350
//                 }} />
//             </div>
//         </div>
//     );
// }

// export default Products;


import React, { useState } from 'react';
import computer from '../../assets/images/computer1.png';
import bluetooth from '../../assets/images/bluetooth.png';
import SingleProduct from '../singleProduct/SingleProduct';
import computerbag from '../../assets/images/computerbag.png';
import mp3 from '../../assets/images/mp3.png';
import Projector from '../../assets/images/projector.png';
import tablet from '../../assets/images/tablet.png';
import Pagination from '../Pagination/Pagination';
import './Product.css';  // Import the CSS file

const productsList = [
    {
        productName: 'XPS 13 Laptop',
        image: computer,
        description: {
            memory: 'Up to 64 GB',
            storage: 'Up to 2 TB',
            display: '34.0cm (13.4")'
        },
        price: 1299.99
    },
    {
        productName: 'Portable Bluetooth Speaker',
        image: bluetooth,
        description: 'Wireless Speaker with HD Sound, Rich Bass, 12H Playtime & Built-in Mic.',
        price: 44.99
    },
    {
        productName: 'Computer bag',
        image: computerbag,
        description: 'Laptop bag 12/13 sleeve. 3/14/15.6 inch notebook sleeve for macbook',
        price: 21.35
    },
    {
        productName: 'MP3 player',
        image: mp3,
        description: 'MP3 Player 1.8 Inch Color Screen Mini BlueTooth',
        price: 37
    },
    {
        productName: 'Projector',
        image: Projector,
        description: 'ED projector in HD resolution for a variety of uses such as home cinema and more.',
        price: 380
    },
    {
        productName: 'Tablet',
        image: tablet,
        description: 'Tablet 10.1 inch Android 12 Tablet 2023 Latest Update',
        price: 350
    }
];

const Products: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsList.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className='all-products'>
            <h2>Electronics devices</h2>
            <div className='products-list'>
                {currentProducts.map((product, index) => (
                    <SingleProduct key={index} product={product} />
                ))}
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={productsList.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}

export default Products;