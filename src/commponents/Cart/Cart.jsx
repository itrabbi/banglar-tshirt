import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order Suumy : {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}</p>)
            }
        </div>
    );
};

export default Cart;