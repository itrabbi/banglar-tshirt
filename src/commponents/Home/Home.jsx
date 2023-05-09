import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }

    const handleRemoveToCart = id => {
        const remaning = cart.filter(ts => ts._id !== id);
        setCart(remaning);
    }
    return (
        <div className='home-conatiner'>
            <div className="tshirts-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveToCart={handleRemoveToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;