import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ carts, setcarts }) => {

    // Remove item from cart
    const deleteHandler = (item) => {
        const remove = carts.filter(delid => delid.id !== item.id);
        setcarts(remove);
        toast.success("Successfully removed from Cart");
    }

    // Clear cart / Payment
    const payment = () => {
        setcarts([]);
        toast.success("Payment Successful!");
    }

    // Calculate total price
    const total = carts.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
        
        
        </>
       
    );
};

export default Cart;