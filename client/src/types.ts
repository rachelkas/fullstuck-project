// src/types.ts

export interface SingleProductProps {
    product: {
        _id: string;
        productName: string;
        description: string;
        price: number;
        image: string;
    };
}
