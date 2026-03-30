import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setcarts }) => {

    

    return (
       
        <div className=" p-4 bg-white shadow-md rounded-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>

            <div className="space-y-4">
                {carts.length === 0 && <p className="text-center text-gray-500">Cart is empty</p>}
                
                {carts.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                        <div className="flex items-center space-x-4">
                            <img src={item.icon} alt={item.name} className="w-12 h-12 rounded-md" />
                            <div>
                                <h3 className="font-semibold">{item.name}</h3>
                                <p className="text-gray-500">${item.price}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => deleteHandler(item)} 
                            className="text-pink-500 hover:underline"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            {carts.length > 0 && (
                <div className="mt-6">
                    <div className="flex justify-between text-lg font-semibold mb-4">
                        <span>Total:</span>
                        <span>${total}</span>
                    </div>
                    <button 
                        onClick={payment} 
                        className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
                    >
                        Proceed To Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;