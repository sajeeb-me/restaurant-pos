"use client";

import React, { useState } from 'react';
import HomePageMenu from './HomePageMenu';
import HomePageOrders from './HomePageOrders';

interface Product {
    id: number;
    name: string;
    price: number | string | Array<object>;
    category: string;
    main_category: string;
}

const HomePage: React.FC = () => {

    const [cart, setCart] = useState<Product[]>([]);
    // console.log(cart)

    return (
        <div className="flex h-screen p-4">
            <div className="flex-1 mr-4">
                <HomePageMenu cart={cart} setCart={setCart} />
            </div>
            <div className="w-1/3">
                <HomePageOrders cart={cart} setCart={setCart} />
            </div>
        </div>
    );
};

export default HomePage;