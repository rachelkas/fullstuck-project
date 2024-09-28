// src/components/PriceFilter/PriceFilter.tsx

import React from 'react';
import Slider from 'rc-slider'; // Importing the price range slider component from 'rc-slider'
import 'rc-slider/assets/index.css'; // Importing the default styles for the slider
// Import custom CSS for the price filter component
import { PriceFilterProps } from '../../common/interfaces'; // Import the PriceFilterProps interface
import '../priceFilter/PriceFilter.css'; // Import the CSS file for styling the price filter component

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
            <h4>Price Range (USD)</h4>
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
                <button className='Apply-Filter-button' onClick={onApplyFilter}>Apply Filter</button>
                {/* Button to reset the price filter */}
                <button className='Cancel-Apply-Filter-button' onClick={onResetFilters}>Cancel</button>
            </div>
        </div>
    );
};

export default PriceFilter;
