import React from 'react';
import { connect } from "react-redux";
import Navbar from '../Components/Navbar';
import ItemCardAllListing from './ItemCardAllListing';

import {Container} from 'reactstrap';
import {getListings} from '../actions/listing';
import {addToCart} from '../actions/cart';


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

const mapStateToProps = (state) => ({
    listings: state.listing.listings,
    cart: state.cart.cart,
  });
  
  export default connect(mapStateToProps, { getListings, addToCart })(
    AllListing
  );
  



