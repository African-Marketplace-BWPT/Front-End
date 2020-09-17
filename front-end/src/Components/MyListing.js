import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const MyListing = () => {
    return(
        <div>
            <h1>This is MyListing</h1>
            <Navbar/>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/createListing'>CreateListng</Link>
            <Link to='/editMyListing'>EdutMyListing</Link>
        </div>
    )
};

export default MyListing;