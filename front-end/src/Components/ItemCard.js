import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const ItemCard = () => {
    return(
        <div>
            <h1>ItemCard</h1>
             <Navbar/>
            <Link to='/allListing'>All Listing</Link>
        </div>
    )
};

export default ItemCard;