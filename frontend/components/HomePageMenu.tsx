import { mockDrinks } from '@/app/mockData';
import React from 'react';

const HomePageMenu: React.FC = () => {
    const drinks = mockDrinks.map((item, index) => {
        return { id: index + 1, ...item };
    });
    return (
        <div className="h-full">
            kfdl
        </div>
    );
};

export default HomePageMenu;