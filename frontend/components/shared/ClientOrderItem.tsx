// components/ClientOrderItem.tsx

'use client'; // This directive is necessary to indicate this is a client component in Next.js

import React, { useState } from 'react';

interface ClientOrderItemProps {
    name: string;
    category: string;
    quantity: number;
    price: number;
}

const ClientOrderItem: React.FC<ClientOrderItemProps> = ({ name, category, quantity: initialQuantity, price }) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="mb-4">
            <div className="grid grid-cols-3">
                <div className=''>
                    <h3 className="font-semibold">{name.length > 13 ? `${name.slice(0, 13)}...` : name}</h3>
                    <p className="text-gray-400 text-xs">{category.length > 13 ? `${category.slice(0, 13)}...` : category}</p>
                </div>
                <div className="flex items-center justify-end ">
                    <button
                        onClick={decrementQuantity}
                        className="bg-red-500 text-white px-2 py-1 rounded-l"
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
                <div className="text-right ">
                    <p className="font-semibold">${(price * quantity).toFixed(2)}</p>
                    <p className="text-gray-400 text-xs">${price.toFixed(2)} each</p>
                </div>
            </div>
        </div>
    );
};

export default ClientOrderItem;