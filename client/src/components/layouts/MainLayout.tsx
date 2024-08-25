// src/components/layouts/MainLayout.tsx

import React from 'react';
import Nav from '../navbar/Nav';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Nav />
            <div>{children}</div>
        </>
    );
};

export default MainLayout;
