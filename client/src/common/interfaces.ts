export interface IUserDetails {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    _id: string;
}

export interface UserState {
    token: string | null;
    cart: CartObject;
    favorites: Array<any>;
    isAuthenticated: boolean;
    userDetails: IUserDetails;
    latestOrder: any | null;  // Add this line for latestOrder
}

export interface CartObject {
    cartId: string,
    items: Array<any>
};

export interface SingleProductProps {
    product: SingleProduct
}

export interface SingleProduct {
    _id: string;
    productName: string;
    description: string;
    price: number;
    image: string;
}

export interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    priceRange: [number, number];
    handleSliderChange: (value: number | number[]) => void;
    onApplyFilter: () => void;
    onResetFilters: () => void;
}

export interface OrderDetailsTableProps {
    selectedCartItems: any[],
    totalAmount: number
};