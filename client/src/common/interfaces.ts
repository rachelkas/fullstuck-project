// Interface defining the user's details in the app
export interface IUserDetails {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    _id: string;
}

// Interface defining the structure of the user's state in Redux
export interface UserState {
    token: string | null;
    cart: CartObject;
    favorites: Array<any>;
    isAuthenticated: boolean;
    userDetails: IUserDetails;
    latestOrder: any | null;  // Stores the user's latest order
}

// Interface for representing a shopping cart with its items
export interface CartObject {
    cartId: string;
    items: Array<any>;
}

// Interface for defining the properties of a single product
export interface SingleProductProps {
    product: SingleProduct;
}

// Structure of a product with fields like name, price, description, etc.
export interface SingleProduct {
    _id: string;
    productName: string;
    description: string;
    price: number;
    image: string;
}

// Properties for the price filter component, including min and max prices
export interface PriceFilterProps {
    minPrice: number;
    maxPrice: number;
    priceRange: [number, number];
    handleSliderChange: (value: number | number[]) => void;
    onApplyFilter: () => void;
    onResetFilters: () => void;
}

// Interface for the table that shows order details
export interface OrderDetailsTableProps {
    selectedCartItems: any[];
    totalAmount: number;


}
