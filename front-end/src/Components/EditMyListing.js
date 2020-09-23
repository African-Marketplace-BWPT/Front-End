import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { addListing } from "../actions/listing";
import Navbar from "./Navbar";

const EditMyListing = () => {
  const [formState, setFormState] = useState({
    id: Date.now(),
    title: "",
    description: "",
    price: "",
    quantity: "",
    photo: "",
  });

  const { title, description, price, quantity, photo } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      title: "",
      description: "",
      price: "",
      quantity: "",
      photo: "",
    });
    addListing(title, description, price, quantity, photo);
  };

  const handleChange = (e) => {
    e.persist();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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
        <FormGroup>
          <Label>Quantity:</Label>
          <Input
            type="text"
            name="quantity"
            onChange={handleChange}
            value={quantity}
          />
        </FormGroup>
        <FormGroup>
          <Label>Photo:</Label>
          <Input
            type="text"
            name="photo"
            onChange={handleChange}
            value={photo}
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Create</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addListing })(EditMyListing);
