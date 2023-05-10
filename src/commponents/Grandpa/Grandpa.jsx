import React from 'react';
import Father from '../Father/Father';
import Uncale from '../Uncale/Uncale';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    const ring = 'dimond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncale></Uncale>
                <Aunty ring={ring}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;