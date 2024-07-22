// import React, { useState } from 'react';
// import computer from '../../assets/images/computer1.png';
// import bluetooth from '../../assets/images/bluetooth.png';
// import SingleProduct from '../singleProduct/SingleProduct';
// import computerbag from '../../assets/images/computerbag.png';
// import mp3 from '../../assets/images/mp3.png';
// import Projector from '../../assets/images/projector.png';
// import tablet from '../../assets/images/tablet.png';
// import './products.css';

// const productsData = [
//     {
//         _id: '1',
//         name: 'XPS 13 Laptop',
//         image: 'path_to_computer_image', // Replace with actual path or URL
//         description: {
//             memory: 'Up to 64 GB',
//             storage: 'Up to 2 TB',
//             display: '34.0cm (13.4")'
//         },
//         price: 1299.99
//     },
//     {
//         _id: '2',
//         name: 'Portable Bluetooth Speaker',
//         image: 'path_to_bluetooth_image', // Replace with actual path or URL
//         description: 'Wireless Speaker with HD Sound, Rich Bass, 12H Playtime & Built-in Mic.',
//         price: 44.99
//     },
//     {
//         _id: '3',
//         name: 'Computer bag',
//         image: 'path_to_computerbag_image', // Replace with actual path or URL
//         description: 'Laptop bag 12/13 sleeve. 3/14/15.6 inch notebook sleeve for macbook',
//         price: 21.35
//     },
//     {
//         _id: '4',
//         name: 'MP3 player',
//         image: 'path_to_mp3_image', // Replace with actual path or URL
//         description: 'MP3 Player 1.8 Inch Color Screen Mini BlueTooth',
//         price: 37
//     },
//     {
//         _id: '5',
//         name: 'Projector',
//         image: 'path_to_projector_image', // Replace with actual path or URL
//         description: 'ED projector in HD resolution for a variety of uses such as home cinema and more.',
//         price: 380
//     },
//     {
//         _id: '6',
//         name: 'Tablet',
//         image: 'path_to_tablet_image', // Replace with actual path or URL
//         description: 'Tablet 10.1 inch Android 12 Tablet 2023 Latest Update',
//         price: 350
//     }
// ];
// const Products: React.FC = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 3;

//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setCurrentPage(Number(event.currentTarget.id));
//     };

//     // Logic for displaying current products
//     const indexOfLastProduct = currentPage * itemsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//     const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(productsData.length / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <div className='all-products'>
//             <h2>Electronics devices</h2>
//             <div className='products-list'>
//                 {currentProducts.map((product, index) => (
//                     <SingleProduct key={index} product={product} />
//                 ))}
//             </div>
//             <div className='pagination'>
//                 {pageNumbers.map(number => (
//                     <button
//                         key={number}
//                         id={number.toString()}
//                         onClick={handleClick}
//                         className={currentPage === number ? 'active' : ''}
//                     >
//                         {number}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;














// import React, { useState } from 'react';
// import computer from '../../../public/assets/images/computer1.png';
// import bluetooth from '../../../public/assets/images/bluetooth.png';
// import SingleProduct from '../singleProduct/SingleProduct';
// import computerbag from '../../../public/assets/images/computerbag.png';
// import mp3 from '../../../public/assets/images/mp3.png';
// import projector from '../../../public/assets/images/projector.png';
// import tablet from '../../../public/assets/images/tablet.png';
// import './products.css';

// const productsData = [
//     {
//         _id: '1',
//         productName: 'XPS 13 Laptop',
//         image: computer,
//         description: {
//             memory: 'Up to 64 GB',
//             storage: 'Up to 2 TB',
//             display: '34.0cm (13.4")'
//         },
//         price: 1299.99
//     },
//     {
//         _id: '2',
//         productName: 'Portable Bluetooth Speaker',
//         image: bluetooth,
//         description: 'Wireless Speaker with HD Sound, Rich Bass, 12H Playtime & Built-in Mic.',
//         price: 44.99
//     },
//     {
//         _id: '3',
//         productName: 'Computer bag',
//         image: computerbag,
//         description: 'Laptop bag 12/13 sleeve. 3/14/15.6 inch notebook sleeve for macbook',
//         price: 21.35
//     },
//     {
//         _id: '4',
//         productName: 'MP3 player',
//         image: mp3,
//         description: 'MP3 Player 1.8 Inch Color Screen Mini BlueTooth',
//         price: 37
//     },
//     {
//         _id: '5',
//         productName: 'Projector',
//         image: projector,
//         description: 'ED projector in HD resolution for a variety of uses such as home cinema and more.',
//         price: 380
//     },
//     {
//         _id: '6',
//         productName: 'Tablet',
//         image: tablet,
//         description: 'Tablet 10.1 inch Android 12 Tablet 2023 Latest Update',
//         price: 350
//     }
// ];

// const Products: React.FC = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 3;

//     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setCurrentPage(Number(event.currentTarget.id));
//     };

//     // Logic for displaying current products
//     const indexOfLastProduct = currentPage * itemsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//     const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

//     // Logic for displaying page numbers
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(productsData.length / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <div className='all-products'>
//             <h2>Electronics devices</h2>
//             <div className='products-list'>
//                 {currentProducts.map((product) => (
//                     <SingleProduct key={product._id} product={product} />
//                 ))}
//             </div>
//             <div className='pagination'>
//                 {pageNumbers.map(number => (
//                     <button
//                         key={number}
//                         id={number.toString()}
//                         onClick={handleClick}
//                         className={currentPage === number ? 'active' : ''}
//                     >
//                         {number}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;















import React, { useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';
import './products.css';

const productsData = [
    {
        _id: '1',
        productName: 'XPS 13 Laptop',
        image: '/assets/images/computer1.png',
        description: {
            memory: 'Up to 64 GB',
            storage: 'Up to 2 TB',
            display: '34.0cm (13.4")'
        },
        price: 1299.99
    },
    {
        _id: '2',
        productName: 'Portable Bluetooth Speaker',
        image: '/assets/images/bluetooth.png',
        description: 'Wireless Speaker with HD Sound, Rich Bass, 12H Playtime & Built-in Mic.',
        price: 44.99
    },
    {
        _id: '3',
        productName: 'Computer bag',
        image: '/assets/images/computerbag.png',
        description: 'Laptop bag 12/13 sleeve. 3/14/15.6 inch notebook sleeve for macbook',
        price: 21.35
    },
    {
        _id: '4',
        productName: 'MP3 player',
        image: '/assets/images/mp3.png',
        description: 'MP3 Player 1.8 Inch Color Screen Mini BlueTooth',
        price: 37
    },
    {
        _id: '5',
        productName: 'Projector',
        image: '/assets/images/projector.png',
        description: 'ED projector in HD resolution for a variety of uses such as home cinema and more.',
        price: 380
    },
    {
        _id: '6',
        productName: 'Tablet',
        image: '/assets/images/tablet.png',
        description: 'Tablet 10.1 inch Android 12 Tablet 2023 Latest Update',
        price: 350
    }
];

const Products: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPage(Number(event.currentTarget.id));
    };

    // Logic for displaying current products
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productsData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className='all-products'>
            <h2>Electronics devices</h2>
            <div className='products-list'>
                {currentProducts.map((product) => (
                    <SingleProduct key={product._id} product={product} />
                ))}
            </div>
            <div className='pagination'>
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        id={number.toString()}
                        onClick={handleClick}
                        className={currentPage === number ? 'active' : ''}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;