// components/HomePageOrders.tsx

import ClientOrderItem from "./shared/ClientOrderItem";


interface OrderItem {
    name: string;
    category: string;
    quantity: number;
    price: number;
}

const HomePageOrders = async () => {
    const orders: OrderItem[] = [
        { name: 'Burger private and convfidential', category: 'Main Course', quantity: 2, price: 5.99 },
        { name: 'Fries', category: 'Appetizer', quantity: 1, price: 2.99 },
        { name: 'Coke rontiec dhurhum road', category: 'Beverage', quantity: 3, price: 1.50 },
    ];

    const calculateTotal = () => {
        return orders.reduce((total, order) => total + (order.price * order.quantity), 0).toFixed(2);
    };

    return (
        <div className="bg-black/30 backdrop-blur-md backdrop-saturate-150 p-4 rounded-xl h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between  mb-5">
                    <h2 className="text-xl font-semibold">Table No: 5</h2>
                    <h3 className="font-semibold text-gray-400">Order ID: #12345</h3>
                </div>
                <div className='grid grid-cols-3 font-bold mb-3'>
                    <p>Item</p>
                    <p className='text-right pr-4'>Quantity</p>
                    <p className='text-right pr-2'>Price</p>
                </div>
                {orders.map((order, index) => (
                    <ClientOrderItem
                        key={index}
                        name={order.name}
                        category={order.category}
                        quantity={order.quantity}
                        price={order.price}
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
