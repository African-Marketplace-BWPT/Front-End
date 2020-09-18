import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Title = styled.h2`
  color: #f07736;
  text-decoration: underline;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  * {
    margin: 1%;
  }
`;

const StyledButton = styled.button`
  text-decoration: none;
  color: white;
  letter-spacing: 0.3rem;
  padding: 0.4rem 2rem;
  font-size: 1.2rem;
  background-color: #f07736;
  border: 2px solid #f07736;
  border-radius: 5px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  &:focus {
    border: 2px solid white;
  }

  &:hover {
    background-color: white;
    color: #f07736;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const EditAddress = () => {
  return (
    <div>
      <Navbar />
      <StyledForm>
        <Title>Edit Your Address</Title>
        <input placeholder="Country" />
        <input placeholder="Full Name" />
        <input placeholder="Street Address" />
        <input placeholder="Apt/Suite" />
        <input placeholder="Zip Code" />
        <input placeholder="City" />
      </StyledForm>
      <Bottom>
        <a href="/dashboard">Back to Dashboard</a>
        <StyledButton type="submit">UPDATE</StyledButton>
      </Bottom>
    </div>
  );
};

export default EditAddress;
