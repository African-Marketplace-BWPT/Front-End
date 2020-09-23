import React from 'react';
import {Link} from 'react-router-dom';


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';


const ItemCardMyListing = () => {


    return(
        <div>
        
            <Card>
                <CardImg top width='100%' src='' alt='Card image cap'/>
                <CardBody>
                    <CardTitle>Temp Card</CardTitle>
                    <CardSubtitle>Price:</CardSubtitle>
                    <CardText>a brief description of the item.</CardText>
                    <Button>View</Button>
                    <Button>Delete</Button>
                    <Button tag={Link} to='/editMyListing'>Update</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default ItemCardMyListing;