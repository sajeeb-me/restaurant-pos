"use client";

import { useState } from "react";
import { mockDrinks } from "../mockData";

export default function HomeLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const drinks = mockDrinks.map((item, index) => {
        return { id: index + 1, ...item };
    });
    const mainCategories = Array.from(new Set(drinks.map(item => item.main_category)));
    console.log(mainCategories);
    // console.log(drinks)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <section className="flex gap-8 h-[100vh]">
            {/* Include shared UI here e.g. a header or sidebar */}
            <aside className="flex-[2]">
                <div className="bg-gray-100 p-4 rounded min-h-[300px]">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <ul>
                        {mainCategories.map((category) => (
                            <li key={category} onClick={() => handleCategoryClick(category)}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">
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
                    <>{children}</>
                )}
            </div>
        </section>
    );
}