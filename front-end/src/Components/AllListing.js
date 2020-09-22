import React from 'react';

import Navbar from '../Components/Navbar';
import ItemCardAllListing from './ItemCardAllListing';

import {Container} from 'reactstrap';


const AllListing = () => {
    return(
        <div>
            <h1>AllListing</h1>
            <Navbar/>
            <Container className='container'>
                <ItemCardAllListing className='card'></ItemCardAllListing>
            </Container>
            
            
        </div>
    )
};

export default AllListing;



