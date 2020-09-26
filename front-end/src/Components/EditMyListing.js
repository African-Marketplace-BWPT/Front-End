import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { editListing } from "../actions/listing";
import Navbar from "./Navbar";
import setAuthToken from '../utils/setAuthToken';

const EditMyListing = ({editlisting, editListing}) => {
  const [formState, setFormState] = useState({
    id: Date.now(),
    title: "",
    description: "",
    price: "",
    //quantity: "",
    image: "",
  });

  const { title, description, price, 
    //quantity, 
    image } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthToken(localStorage.token);
    editListing(formState);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("Edit form", editlisting);
    setFormState({
      id: ! editlisting.id ? "" :  editlisting.id,
      name: ! editlisting.name ? "" :  editlisting.name,
      description: ! editlisting.description ? "" :  editlisting.description,
      price: ! editlisting.price ? "" :  editlisting.price,
    });
  }, [, editlisting]);


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
        <Button className="btn-lg btn-dark btn-block">Create</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
   editlisting: state.listing. editlisting,
});

export default connect(mapStateToProps, { editListing })(EditMyListing);
