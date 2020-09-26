import React, { useState } from "react";
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { addListing } from "../actions/listing";
import Navbar from "./Navbar";

const CreateListing = ({addListing, user, loading}) => {
  console.log(loading)
  console.log('here is userID', user)
  const userid = user;
  const [formState, setFormState] = useState({
    id: Date.now(),
    title: "",
    description: "",
    price: "",
    //quantity: "",
    image: "",
    userId: userid
  });

  const { title, description, price, 
    //quantity, 
    image } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(formState);
    addListing(formState);
    console.log(formState,'here is form state')
  };

  const handleChange = (e) => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar></Navbar>
      <Form onSubmit={handleSubmit} className="Create-Listing-Form">
        <h1 className="text-center">Create Listing</h1>
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
        <button 
        //tag={Link} to='/mylisting' 
        className="btn-lg btn-dark btn-block">Create</button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { addListing })(CreateListing);
