// components/HomePageOrders.tsx

'use client'

import { useState } from "react";
import ClientOrderItem from "./shared/ClientOrderItem";
import { mockOrders } from "@/app/mockData";

interface HomePageOrdersProps {
    cart: any[];
    setCart: any;
}

interface OrderItemProps {
    name: string;
    category: string;
    quantity: number;
    price: number;
}

const HomePageOrders: React.FC<HomePageOrdersProps> = ({ cart, setCart }) => {
    // const [orders, setOrders] = useState<OrderItemProps[]>(mockOrders);

    const handleQuantityChange = (index: number, newQuantity: number) => {
        const updatedOrders = [...cart];
        updatedOrders[index].quantity = newQuantity;
        setCart(updatedOrders);
    };

    const handleDeleteOrder = (index: number) => {
        const updatedOrders = cart.filter((_, i) => i !== index);
        setCart(updatedOrders);
    }

    const calculateTotal = () => {
        return cart.reduce((total, order) => total + (order.prices[0].price * order.quantity), 0).toFixed(2);
    };

    return (
        <div className="bg-black/30 backdrop-blur-md backdrop-saturate-150 p-4 rounded-xl h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between  mb-5">
                    <h2 className="text-xl font-semibold">Table No: 5</h2>
                    <h3 className="font-semibold text-gray-400">Order ID: #12345</h3>
                </div>
                <div className='grid grid-cols-3 font-bold mb-3 text-primary'>
                    <p>Items</p>
                    <p className='text-right pr-4'>Quantity</p>
                    <p className='text-right pr-2'>Price</p>
                </div>
                {cart.map((order, index) => (
                    <ClientOrderItem
                        key={index}
                        index={index}
                        name={order.name}
                        category={order.category}
                        quantity={order.quantity}
                        price={order.prices[0].price}
                        type={order.prices[0].type}
                        onQuantityChange={handleQuantityChange}
                        onDeleteOrder={handleDeleteOrder}
                    />
                ))}
            </div>
            <div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
                    <h3 className="text-lg font-semibold">Total:</h3>
                    <p className="text-lg font-semibold">${calculateTotal()}</p>
                </div>
                <button className="w-full bg-primary text-white py-2 mt-4 rounded-lg font-medium">Print Bill</button>
            </div>
        </div>
    );
};

export default HomePageOrders;
