import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar';


const AllListing = () => {
    return(
        <div>
            <h1>AllListing</h1>
            <Navbar/>
            <Link to='/itemCard'>View Card</Link>
            
        </div>
    )
};

export default AllListing;