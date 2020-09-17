import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Cart = () => {
    return(
        <div>
            <h1>Cart</h1>
            <Navbar/>
            <Link to='/checkout'>Checkout</Link>
            
        </div>
    )
};

export default Cart;