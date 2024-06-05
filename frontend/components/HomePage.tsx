import React from 'react';
import HomePageMenu from './HomePageMenu';
import HomePageOrders from './HomePageOrders';

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen p-4">
            <div className="flex-1 mr-4">
                <HomePageMenu />
            </div>
            <div className="w-1/3">
                <HomePageOrders />
            </div>
        </div>
    );
};

export default HomePage;