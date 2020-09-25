import React from 'react';
import { connect } from "react-redux";
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

//import styled from 'styled-components';
import ItemCardMyListing from './ItemCardMyListing';
//import {Button} from 'react-bootstrap';
import {getListings} from '../actions/listing';



const MyListing = ({getListings, listings, user}) => {

    return(
        <div>
            <h1>This is MyListing</h1>
            <Navbar/>

            <Link to='/createListing' className="text-center btn-lg .bg-warning" >Create Listing</Link>
            
            {listings.length === 0 ? (
            <div>Please Add Producuts</div>
          ) : (
            listings.map(
              (listing) =>
                listing.user_id === user.id && (
                  <ItemCardMyListing
                    key={listing.id}
                    listings={listing}
                    getListings={getListings}
                  />
                )
            )
          )}
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    listings: state.listing.listings,
    user: state.auth.user,
  });
  
  export default connect(mapStateToProps, { getListings })(MyListing);

// const Container = styled.div`
//     margin: 10px 10% 10px 10%;
//     border: black solid 3px;
//     height: 60vh;
//     padding: 2px;
//     display: flex;
//     flex-direction: column;
    
// `


// const CreateButton = styled.a`
//     width: 200px;
//     height: 100px;
//     border: black solid 1px;
//     border-radius: 1px;
//     text-decoration: none;
//     background-color: #f07736;
//     color: black;
//     font-family: Poppin;
//     font-size: 1rem;
//     &:hover{
//         color: white;
//     }
        
// `


// const Buttons = styled.a`
//     width: 200px;
//     height: 100px;
//     border: black solid 1px;
//     border-radius: 1px;
//     text-decoration: none;
//     background-color: #f07736;
//     color: black;
//     font-family: Poppin;
//     font-size: 1rem;
//     &:hover{
//         color: white;
//     }
        
// `

