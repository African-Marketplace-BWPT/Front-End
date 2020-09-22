import React from 'react';



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
                    <Button>Update</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default ItemCardMyListing;