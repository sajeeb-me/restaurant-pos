'use client';

import { mockDrinks } from '@/app/mockData';
import React, { useState } from 'react';
import Accordion from './shared/Accordion';
import CardMenu from './shared/CardMenu';

interface HomePageMenuProps {
    cart: any[];
    setCart: any;
}

const HomePageMenu: React.FC<HomePageMenuProps> = ({ cart, setCart }) => {
    const drinks = mockDrinks.map((item, index) => {
        return { id: index + 1, ...item };
    });
    const mainCategories = Array.from(new Set(drinks.map(item => item.main_category)));
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
                (cartItem.id === item.id && cartItem.selectedItem?.type == item.selectedItem?.type)
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
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
            <aside className="flex-[2] h-full">
                <div className="bg-black/40 backdrop-blur-md backdrop-saturate-150 p-4 rounded-xl h-full">
                    <Accordion items={accordionItems} />
                </div>
            </aside>
            <div className="flex-[8] rounded-xl">
                {selectedCategory ? (
                    <div
                        className="grid grid-cols-3 gap-2"
                    >
                        {drinks
                            .filter((item) => item.main_category === selectedCategory)
                            .map((item) => (
                               <CardMenu key={item.id} item={item} OnAddToCart={handleAddToCart} />
                            ))}
                    </div>
                ) : (
                    <div
                        className='flex flex-col items-center justify-center h-full bg-black/40 backdrop-blur-md backdrop-saturate-150 rounded-xl p-4 text-white text-center'
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