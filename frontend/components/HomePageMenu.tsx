'use client';

import { mockDrinks } from '@/app/mockData';
import React, { useState } from 'react';
import Accordion from './shared/Accordion';

const HomePageMenu: React.FC = () => {
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
    
    return (
        <section className="flex gap-4 h-full">
            {/* Include shared UI here e.g. a header or sidebar */}
            <aside className="flex-[2] h-full">
                <div className="bg-black/30 backdrop-blur-md backdrop-saturate-150 p-4 rounded-xl h-full">
                    {/* <h2 className="text-lg font-semibold">Menu</h2>
                    <ul>
                        {mainCategories.map((category) => (
                            <li key={category} onClick={() => handleCategoryClick(category)}>
                                {category}
                            </li>
                        ))}
                    </ul> */}

                    <Accordion items={accordionItems} />
                </div>
            </aside>
            <div className="bg-black/30 backdrop-blur-md backdrop-saturate-150 flex-[8] p-4 rounded-xl">
                {selectedCategory ? (
                    // Render items for the selected category
                    <ul>
                        {drinks
                            .filter((item) => item.main_category === selectedCategory)
                            .map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                    </ul>
                ) : (
                    // Render children
                    <>
                        dsfljf
                    </>
                )}
            </div>
        </section>
    );
};

export default HomePageMenu;