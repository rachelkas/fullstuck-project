import React, { useState } from 'react';

interface PriceFilterProps {
    onFilter: (minPrice: number, maxPrice: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleFilter = () => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        onFilter(min, max);
    };

    return (
        <div className="price-filter">
            <h3>Filter by Price</h3>
            <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    );
};

export default PriceFilter;
