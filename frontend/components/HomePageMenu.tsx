'use client';

import { mockDrinks } from '@/app/mockData';
import React, { useState } from 'react';
import Accordion from './shared/Accordion';

interface HomePageMenuProps {
    // define your props here
    cart: any[];
    setCart: any;
}

const HomePageMenu: React.FC<HomePageMenuProps> = ({ cart, setCart }) => {
    const drinks = mockDrinks.map((item, index) => {
        return { id: index + 1, ...item };
    });
    const mainCategories = Array.from(new Set(drinks.map(item => item.main_category)));
    // console.log(mainCategories);
    // console.log(drinks)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const accordionItems = mainCategories.map((category) => ({
        title: category,
        onClick: () => handleCategoryClick(category),
    }));

    const handleAddToCart = (item: any) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id && cartItem.selectedItem?.type === item.selectedItem?.type);
        if (existingItem) {
            const updatedCart = cart.map((cartItem) =>
                (cartItem.id === item.id && cartItem.selectedItem?.type == item.selectedItem?.type) ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCart(updatedCart);
        } else {
            const updatedItem = { ...item, quantity: 1 };
            if (item.selectedItem) {
                updatedItem.prices = [item.selectedItem];
                updatedItem.selectedItem = item.selectedItem;
            }
            setCart([...cart, updatedItem]);
        }
    }

    return (
        <section className="flex gap-4 h-full">
            {/* Include shared UI here e.g. a header or sidebar */}
            <aside className="flex-[2] h-full">
                <div className="bg-black/30 backdrop-blur-md backdrop-saturate-150 p-4 rounded-xl h-full">
                    <Accordion items={accordionItems} />
                </div>
            </aside>
            <div className="flex-[8] rounded-xl">
                {selectedCategory ? (
                    // Render items for the selected category
                    <div
                        className="grid grid-cols-3 gap-2"
                    >
                        {drinks
                            .filter((item) => item.main_category === selectedCategory)
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className={`bg-black/30 backdrop-blur-md backdrop-saturate-150 p-2 rounded-lg border border-transparent hover:border-primary/50 transition duration-300  
                                        ${(item.prices.length == 1 || item.prices[0].type == 'single') && "cursor-pointer hover:bg-black/50 transition duration-300"}`}
                                    onClick={item.prices.length === 1 ? () => handleAddToCart(item) : () => { }}
                                >
                                    <h2 className="font-semibold">{item.name}</h2>
                                    <div className='mt-5 text-xs'>
                                        {item.prices.length > 1 || item.prices[0].type != 'single' ? (
                                            <div className='grid grid-cols-2 gap-2'>
                                                {item.prices.map((price) => (
                                                    <div
                                                        key={price.type}
                                                        className="bg-primary/20 p-2 rounded-lg cursor-pointer hover:bg-primary/50 transition duration-300"
                                                        onClick={() => handleAddToCart({ ...item, selectedItem: price })}
                                                    >
                                                        <span className='capitalize'>{price.type.length > 6 ? `${price.type.slice(0, 6)}...` : price.type} : </span>
                                                        <span>£{price.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p>Price: £{item.prices[0].price}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                ) : (
                    // Render children
                    <div
                        className='flex flex-col items-center justify-center h-full bg-black/30 backdrop-blur-md backdrop-saturate-150 rounded-xl p-4 text-white text-center'
                    >
                        <h2 className="text-4xl font-semibold text-primary mb-2">Welcome to Delhi6 Menu</h2>
                        <p className="text-lg">Select a category to view items</p>
                    </div>
                )}
            </div>
        </section >
    );
};

export default HomePageMenu;