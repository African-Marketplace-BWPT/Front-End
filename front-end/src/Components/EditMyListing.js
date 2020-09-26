import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { editListing } from "../actions/listing";
import Navbar from "./Navbar";
import setAuthToken from '../utils/setAuthToken';
import { useParams } from "react-router-dom";

const EditMyListing = ({editlisting, listing, listings, editListing, user, loading}) => {
  console.log(loading)
  console.log('here is listing.id inside editmylisting', listings)
  const userid = user;
  console.log(user)
  const [formState, setFormState] = useState({
    id: listing.data.id,
    title: "",
    description: "",
    price: "",
    //quantity: "",
    image: "",
    userId: userid
  });

  const { id } = useParams();
  console.log('here is id', id)

  const { title, description, price, 
    //quantity, 
    image } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthToken(localStorage.token);
    editListing({id: parseInt(id), userId: user, title: formState.title, description: formState.description, price: formState.price, image: formState.image});
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(typeof editlisting)
    console.log("Edit form", editlisting);
    setFormState({
      userId: ! listing.data.userId ? "" :  editlisting.id,
      title: ! listing.data.title ? "" :  listing.data.title,
      description: ! listing.data.description ? "" :  listing.data.description,
      price: ! listing.data.price ? "" :  listing.data.price,
    });
  }, [ editlisting]);


  return (
    <div>
      <Navbar></Navbar>
      <Form onSubmit={handleSubmit} className="Create-Listing-Form">
        <h1 className="text-center">Edit Listing</h1>
        <FormGroup row>
          <Label className="text-right" sm={2}>
            Title:
          </Label>
          <Col className="mx-auto" sm={6}>
            <Input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label>Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={handleChange}
            value={description}
          />
        </FormGroup>
        <FormGroup>
          <Label>Price:</Label>
          <Input
            type="text"
            name="price"
            onChange={handleChange}
            value={price}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label>Quantity:</Label>
          <Input
            type="text"
            name="quantity"
            onChange={handleChange}
            value={quantity}
          />
        </FormGroup> */}
        <FormGroup>
          <Label>image:</Label>
          <Input
            type="text"
            name="image"
            onChange={handleChange}
            value={image}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Update</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  editlistings: state.listing.editlisting,
  user: state.auth.user.id,
  loading: state.auth.loading,
  listing: state.listing.listings
});

export default connect(mapStateToProps, { editListing })(EditMyListing);
