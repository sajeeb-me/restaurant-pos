import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";

interface AccordionItem {
    title: string;
    onClick: () => void;
}

const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            <div
                className="font-semibold cursor-pointer bg-primary/20 rounded text-center flex justify-between items-center gap-2 px-2 py-1 hover:bg-primary/10 transition duration-300"
                onClick={() => setClicked(!clicked)}
            >
                <span className={`${clicked && 'text-primary'}`} >Drinks Menu</span>
                <MdArrowForwardIos className={`text-xs ${clicked && "rotate-90"} duration-300`} />
            </div>
            {clicked && (
                <ul className="border-l pl-3 ml-2 mt-1 border-primary">
                    {items.map((item) => (
                        <li key={item.title} className="mb-2">
                            <button
                                className="text-left w-full focus:outline-none hover:text-gray-300 text-sm cursor-pointer flex justify-between items-center bg-transparent"
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
