import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncale from '../Uncale/Uncale';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

export const RingContext = createContext('gold')
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'dimond';
    const [money, setMoney] = useState(0);
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncale></Uncale>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;


/**
 * 1. create context and export
 * 2. Create a provider and pass a value
 * 3. use useContext to receive 
 * */ 