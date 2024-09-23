// import React from 'react';
// import './pagination.css';

// interface PaginationProps {
//     productsPerPage: number;
//     totalProducts: number;
//     paginate: (pageNumber: number) => void;
//     currentPage: number;
// }

// const Pagination: React.FC<PaginationProps> = ({
//     productsPerPage,
//     totalProducts,
//     paginate,
//     currentPage,
// }) => {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <nav className="pagination">
//             <ul>
//                 {pageNumbers.map(number => (
//                     <li key={number} className={number === currentPage ? 'active' : ''}>
//                         <a onClick={() => paginate(number)} href="#!">
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default Pagination;























import React from 'react';
import './pagination.css'; // Import the CSS for pagination styles

// Interface for the Pagination props, defining the types of the inputs
interface PaginationProps {
    productsPerPage: number; // Number of products to display per page
    totalProducts: number; // Total number of products
    paginate: (pageNumber: number) => void; // Function to call when a page number is clicked
    currentPage: number; // Current active page
}

// Functional component for pagination
const Pagination: React.FC<PaginationProps> = ({
    productsPerPage,
    totalProducts,
    paginate,
    currentPage,
}) => {
    const pageNumbers = []; // Array to hold the page numbers

    // Calculate the total number of pages based on total products and products per page
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i); // Push each page number into the array
    }

    return (
        <nav className="pagination"> {/* Container for the pagination */}
            <ul>
                {/* Map over the array of page numbers to create a list item for each page */}
                {pageNumbers.map(number => (
                    <li key={number} className={number === currentPage ? 'active' : ''}>
                        <a onClick={() => paginate(number)} href="#!"> {/* Call paginate function when a page number is clicked */}
                            {number} {/* Display the page number */}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
