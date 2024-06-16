// components/shared/ClientOrderItem.tsx

import React, { useState } from 'react';
import { MdDeleteOutline } from "react-icons/md";

interface ClientOrderItemProps {
    index: number;
    name: string;
    category: string;
    quantity: number;
    price: number;
    type: string;
    onQuantityChange: (index: number, newQuantity: number) => void;
    onDeleteOrder: (index: number) => void;
}

const ClientOrderItem: React.FC<ClientOrderItemProps> = ({ index, name, category, quantity, price, type, onQuantityChange, onDeleteOrder }) => {
    const incrementQuantity = () => {
        onQuantityChange(index, quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            onQuantityChange(index, quantity - 1);
        }
    };

    return (
        <div className="mb-4">
            <div className="grid grid-cols-3">
                <div className=''>
                    <h3 className="font-semibold">{name.length > 11 ? `${name.slice(0, 11)}...` : name} <span className='text-xs'>{type != 'single' && `(${type.slice(0, 1).toUpperCase()})`}</span> </h3>
                    <p className="text-gray-400 text-xs">{category.length > 20 ? `${category.slice(0, 20)}...` : category}</p>
                </div>
                <div className="flex items-center justify-end ">
                    <button
                        onClick={decrementQuantity}
                        className="bg-red-500 text-white px-2 py-1 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={quantity === 1}
                    >
                        -
                    </button>
                    <span className="px-2 min-w-10 text-center">{quantity}</span>
                    <button
                        onClick={incrementQuantity}
                        className="bg-green-500 text-white px-2 py-1 rounded-r"
                    >
                        +
                    </button>
                </div>
                <div className='flex justify-end items-center gap-2'>
                    <div className="text-right">
                        <p className="font-semibold">£{(Number(price) * Number(quantity)).toFixed(2)}</p>
                        <p className="text-gray-400 text-xs">£{Number(price).toFixed(2)} each</p>
                    </div>
                    <button
                        className="text-primary/50 hover:text-primary duration-300 text-3xl"
                        onClick={() => onDeleteOrder(index)}
                    >
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ClientOrderItem;