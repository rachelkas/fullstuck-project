import React from 'react';
import Nav from '../navbar/Nav';

interface MainLayoutProps {
    children: React.ReactNode;
    onResetFilters: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onResetFilters }) => {
    return (
        <>
            <Nav onResetFilters={onResetFilters} />
            <div>{children}</div>
        </>
    );
};

export default MainLayout;
