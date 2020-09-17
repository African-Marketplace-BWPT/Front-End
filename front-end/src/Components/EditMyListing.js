import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const EditMyListing = () => {
    return(
        <div>
            <h1>This is EditMyListing</h1>
            <Navbar/>
            <Link to='/myListing'>My Listing</Link>
            
            
        </div>
    )
};

export default EditMyListing;