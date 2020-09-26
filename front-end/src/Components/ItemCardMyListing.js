import React from 'react';
import {Link} from 'react-router-dom';

import setAuthToken from '../utils/setAuthToken';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import { connect } from 'react-redux';


import {setListing, deleteListing, getListings} from '../actions/listing';

    
const ItemCardMyListing = (
    
    {listings,
    setListing,
    deleteListing,
    getListings}
) => {
    console.log('here is listing.id', listings.id);
    const { image, title, description, price, id } = listings;

    const setList = (id) => {
        setListing(id);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        setAuthToken(localStorage.token);
        deleteListing(id);
        getListings(id);
    }
    

    return(
        <div>
        
            <Card>
                <CardImg top width='100%' src={image} alt='Card image cap'/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>Price:{price}</CardSubtitle>
                    <CardText>{description}</CardText>
                    
                    <Button
                        onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button tag={Link} to={`/editMyListing/${listings.id}`} onClick={() => setList(listings.id)}>Update</Button>
                </CardBody>
            </Card>
        </div>
    )
};

const mapStateToProps = (state) => ({
    listings: state.listing.listings
  });


export default connect(null, {mapStateToProps, setListing, deleteListing, getListings})(ItemCardMyListing);