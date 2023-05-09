import React from 'react';

const Cart = ({ cart, handleRemoveToCart }) => {
    return (
        <div>
            <h2>Order Suumy : {cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button 
                 onClick={() => handleRemoveToCart(tshirt._id)}
                 >X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;