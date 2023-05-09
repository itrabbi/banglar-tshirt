import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveToCart }) => {
    // 1con
    let massage;
    if (cart.length === 0) {
        massage = <p>Please add some products</p>
    }
    else {
        massage = <div>
            <h3>Boroloxxx</h3>
            <p><span>Thanks for giving your money</span></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary : {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {/*  2con */}
            {
                cart.length > 2
                    ? <span className='purple'>Aro kino</span>
                    : <span>Fokira</span>
            }
            {/* 1con */}
            {massage}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveToCart(tshirt._id)}
                >X</button>
                </p>)
            }
            {/* 3con */}
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {/* 4con */}
            {
                cart.length === 3 || <h3>Tinta to hoilo na!!</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if or if else to set a variable that will contain an element , components
 * 2. ternary operator : condition ? 'for true' : 'false' 
 * 3. logical && : (if the condition is true then the next thing will be displayed)
 * 4. logical || (if the condition is false then the next thing will be displayed)
 **/


/**
 * CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. ternary inside template string
 **/