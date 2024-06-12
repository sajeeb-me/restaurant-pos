import React, { useState } from 'react';

interface AccordionItem {
    title: string;
    onClick: () => void;
}

const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div
                className="text-lg font-semibold cursor-pointer bg-primary/20 p1-4 rounded text-center"
                onClick={() => setClicked(!clicked)}
            >
                Drinks menu
                <span> fdsf</span>
            </div>
            {clicked && (
                <ul className="list-none p-0">
                    {items.map((item) => (
                        <li key={item.title} className="mb-2">
                            <button
                                className="text-left w-full focus:outline-none hover:text-gray-200 text-base font-medium cursor-pointer flex justify-between items-center bg-transparent"
                                onClick={item.onClick}
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Accordion;
