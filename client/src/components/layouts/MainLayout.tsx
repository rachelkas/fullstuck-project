import React from 'react';
import Nav from '../navbar/Nav'; // Update the path to Nav component

// Props for the MainLayout, including children components and a filter reset function
interface MainLayoutProps {
    children: React.ReactNode;
    onResetFilters: () => void;
}

// Main layout component that renders the Nav and any children passed to it
const MainLayout: React.FC<MainLayoutProps> = ({ children, onResetFilters }) => {
    return (
        <>
            <Nav onResetFilters={onResetFilters} /> {/* Renders the navbar with a filter reset function */}
            <div>{children}</div> {/* Renders child components */}
        </>
    );
};

export default MainLayout;
