import React, { useState } from 'react';

interface OrderItem {
    name: string;
    category: string;
    quantity: number;
    price: number;
}

const HomePageOrders: React.FC = () => {
    const orders: OrderItem[] = [
        { name: 'Burger', category: 'Main Course', quantity: 2, price: 5.99 },
        { name: 'Fries', category: 'Appetizer', quantity: 1, price: 2.99 },
        { name: 'Coke', category: 'Beverage', quantity: 3, price: 1.50 },
    ];

    const calculateTotal = () => {
        return orders.reduce((total, order) => total + (order.price * order.quantity), 0).toFixed(2);
    };

    return (
        <div className="p-4 rounded-2xl h-full bg-black/15 backdrop-blur-md">
            <div>
                <h2 className="text-xl font-semibold mb-4">Table No: 5</h2>
                <h3 className="text-md font-semibold mb-4">Order ID: 12345</h3>
                {orders.map((order, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{order.name}</h3>
                        <p className="text-gray-400">{order.category}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button className="bg-red-500 text-white px-2 py-1 rounded-l">
                                    -
                                </button>
                                <span className="px-2">{order.quantity}</span>
                                <button className="bg-green-500 text-white px-2 py-1 rounded-r">
                                    +
                                </button>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${(order.price * order.quantity).toFixed(2)}</p>
                                <p className="text-gray-400">${order.price.toFixed(2)} each</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
                    <h3 className="text-lg font-semibold">Total:</h3>
                    <p className="text-lg font-semibold">${calculateTotal()}</p>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg">Print</button>
            </div>
        </div>
    );
};

export default HomePageOrders;


/*
// components/HomePageOrders.tsx

import React, { useState } from 'react';

interface OrderItem {
    name: string;
    category: string;
    quantity: number;
    price: number;
}

const HomePageOrders: React.FC = () => {
    const [orderId] = useState<string>('ORD12345');  // Single order ID for the whole order
    const [orders, setOrders] = useState<OrderItem[]>([
        { name: 'Burger', category: 'Main Course', quantity: 2, price: 5.99 },
        { name: 'Fries', category: 'Appetizer', quantity: 1, price: 2.99 },
        { name: 'Coke', category: 'Beverage', quantity: 3, price: 1.50 },
    ]);

    const incrementQuantity = (index: number) => {
        setOrders(orders.map((order, i) => i === index ? { ...order, quantity: order.quantity + 1 } : order));
    };

    const decrementQuantity = (index: number) => {
        setOrders(orders.map((order, i) => i === index && order.quantity > 1 ? { ...order, quantity: order.quantity - 1 } : order));
    };

    const calculateTotal = () => {
        return orders.reduce((total, order) => total + (order.price * order.quantity), 0).toFixed(2);
    };

    return (
        <div className="bg-white/30 backdrop-blur-md backdrop-saturate-150 p-4 rounded-lg shadow-md h-full border border-gray-200 flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-semibold mb-4">Order ID: {orderId}</h2>
                {orders.map((order, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{order.name}</h3>
                        <p className="text-gray-600">{order.category}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button 
                                    onClick={() => decrementQuantity(index)} 
                                    className="bg-red-500 text-white px-2 py-1 rounded-l"
                                >
                                    -
                                </button>
                                <span className="px-2">{order.quantity}</span>
                                <button 
                                    onClick={() => incrementQuantity(index)} 
                                    className="bg-green-500 text-white px-2 py-1 rounded-r"
                                >
                                    +
                                </button>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">${(order.price * order.quantity).toFixed(2)}</p>
                                <p className="text-gray-600">${order.price.toFixed(2)} each</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
                    <h3 className="text-lg font-semibold">Total:</h3>
                    <p className="text-lg font-semibold">${calculateTotal()}</p>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-lg">Print</button>
            </div>
        </div>
    );
};

export default HomePageOrders;


*/