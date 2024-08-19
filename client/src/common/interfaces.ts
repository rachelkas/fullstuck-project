export interface IUserDetails {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    _id: string;
}

export interface UserState {
    token: string | null;
    cart: any[];
    favorites: any[];
    isAuthenticated: boolean;
    userDetails: IUserDetails;
}

export interface SingleProductProps {
    product: {
        _id: string;
        productName: string;
        description: string;
        price: number;
        image: string;
    };
}

