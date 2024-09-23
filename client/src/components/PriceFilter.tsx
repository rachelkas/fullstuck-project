// // src/components/PriceFilter/PriceFilter.tsx

// import React from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import './PriceFilter.css'; // Import your custom CSS
// import { PriceFilterProps } from '../common/interfaces'; // Import the interface here

// const PriceFilter: React.FC<PriceFilterProps> = ({
//     minPrice,
//     maxPrice,
//     priceRange,
//     handleSliderChange,
//     onApplyFilter,
//     onResetFilters,
// }) => {
//     return (
//         <div className="price-filter-container">
//             <h3>Price Range (USD)</h3>
//             <Slider
//                 range
//                 min={minPrice}
//                 max={maxPrice}
//                 defaultValue={[minPrice, maxPrice]}
//                 value={priceRange}
//                 onChange={handleSliderChange}
//                 trackStyle={[{ backgroundColor: '#4CAF50' }]}
//                 handleStyle={[
//                     { borderColor: '#4CAF50' },
//                     { borderColor: '#4CAF50' }
//                 ]}
//             />
//             <div className="price-values">
//                 <span>{priceRange[0]} USD</span>
//                 <span>{priceRange[1]} USD</span>
//             </div>
//             <div className="filter-buttons">
//                 <button onClick={onApplyFilter}>Apply Filter</button>
//                 <button onClick={onResetFilters}>Cancel</button>
//             </div>
//         </div>
//     );
// };

// export default PriceFilter;




































// src/components/PriceFilter/PriceFilter.tsx

import React from 'react';
import Slider from 'rc-slider'; // Importing the price range slider component from 'rc-slider'
import 'rc-slider/assets/index.css'; // Importing the default styles for the slider
import './PriceFilter.css'; // Import custom CSS for the price filter component
import { PriceFilterProps } from '../common/interfaces'; // Import the PriceFilterProps interface

const PriceFilter: React.FC<PriceFilterProps> = ({
    minPrice, // Minimum price value for the slider
    maxPrice, // Maximum price value for the slider
    priceRange, // The current selected price range
    handleSliderChange, // Function to handle changes in the slider
    onApplyFilter, // Function to apply the selected price filter
    onResetFilters, // Function to reset the filters
}) => {
    return (
        <div className="price-filter-container">
            <h3>Price Range (USD)</h3>
            <Slider
                range // Enables range selection between two values
                min={minPrice} // Minimum price limit for the slider
                max={maxPrice} // Maximum price limit for the slider
                defaultValue={[minPrice, maxPrice]} // Default slider values set between the minimum and maximum prices
                value={priceRange} // Current price range selected by the user
                onChange={handleSliderChange} // Function triggered when the slider values change
                trackStyle={[{ backgroundColor: '#4CAF50' }]} // Styling the track between the handles
                handleStyle={[
                    { borderColor: '#4CAF50' }, // Custom style for the left handle
                    { borderColor: '#4CAF50' }, // Custom style for the right handle
                ]}
            />
            <div className="price-values">
                {/* Display the current selected price range */}
                <span>{priceRange[0]} USD</span>
                <span>{priceRange[1]} USD</span>
            </div>
            <div className="filter-buttons">
                {/* Button to apply the selected price filter */}
                <button onClick={onApplyFilter}>Apply Filter</button>
                {/* Button to reset the price filter */}
                <button onClick={onResetFilters}>Cancel</button>
            </div>
        </div>
    );
};

export default PriceFilter;
