import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar';

const CreateListing = () =>{
    return(
        <div>
            <h1>CreateListing</h1>
            <Link to='/myListing'>Go Back to My Listing</Link>
        </div>
        
    )
};

export default CreateListing;