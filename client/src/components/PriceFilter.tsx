// src/components/PriceFilter/PriceFilter.tsx

import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PriceFilter.css'; // Import your custom CSS
import { PriceFilterProps } from '../common/interfaces'; // Import the interface here

const PriceFilter: React.FC<PriceFilterProps> = ({
    minPrice,
    maxPrice,
    priceRange,
    handleSliderChange,
    onApplyFilter,
    onResetFilters,
}) => {
    return (
        <div className="price-filter-container">
            <h3>Price Range (USD)</h3>
            <Slider
                range
                min={minPrice}
                max={maxPrice}
                defaultValue={[minPrice, maxPrice]}
                value={priceRange}
                onChange={handleSliderChange}
                trackStyle={[{ backgroundColor: '#4CAF50' }]}
                handleStyle={[
                    { borderColor: '#4CAF50' },
                    { borderColor: '#4CAF50' }
                ]}
            />
            <div className="price-values">
                <span>{priceRange[0]} USD</span>
                <span>{priceRange[1]} USD</span>
            </div>
            <div className="filter-buttons">
                <button onClick={onApplyFilter}>Apply Filter</button>
                <button onClick={onResetFilters}>Cancel</button>
            </div>
        </div>
    );
};

export default PriceFilter;
