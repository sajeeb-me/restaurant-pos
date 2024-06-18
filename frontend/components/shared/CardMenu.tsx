import React from 'react';

interface CardMenuProps {
    item: any;
    OnAddToCart: (item: any) => void;
}

const CardMenu: React.FC<CardMenuProps> = ({ item, OnAddToCart }) => {
    return (
        <button
            className={`text-left bg-black/40 backdrop-blur-md backdrop-saturate-150 p-2 rounded-lg border border-transparent hover:border-primary/50 transition duration-300  
                                        ${(item.prices.length == 1 || item.prices[0].type == 'single') && "cursor-pointer hover:bg-primary/10 transition duration-300"}`}
            onClick={item.prices.length === 1 ? () => OnAddToCart(item) : () => { }}
        >
            <h2 className="font-semibold">{item.name}</h2>
            <div className='mt-5 text-xs'>
                {item.prices.length > 1 || item.prices[0].type != 'single' ? (
                    <div className='grid grid-cols-2 gap-2'>
                        {item.prices.map((price: { type: string, price: number }) => (
                            <button
                                key={price.type}
                                className="bg-primary/20 p-2 rounded-lg cursor-pointer hover:bg-primary/50 transition duration-300"
                                onClick={() => OnAddToCart({ ...item, selectedItem: price })}
                            >
                                <span className='capitalize'>{price.type.length > 6 ? `${price.type.slice(0, 6)}..` : price.type} : </span>
                                <span>£{price.price}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p>Price: £{item.prices[0].price}</p>
                )}
            </div>
        </button>
    );
};

export default CardMenu;