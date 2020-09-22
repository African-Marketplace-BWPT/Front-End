import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: Poppin;
  color: #2b2c2d;
`;

const Styledbutton = styled.a`
  padding: 2%;
  text-decoration: none;
  &:hover {
    color: #f07736;
  }
`;

const Title = styled.h2`
  color: #f07736;
`;

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="leftContainer">
          <Title>Welcome back, Insert Username Here</Title>
          <Styledbutton href="/myListing">My Listings</Styledbutton>
        </div>

        <div className="userInfo">
          <Title>Address:</Title>
          <p>Name</p>
          <p>Street Address</p>
          <p>Apt/Suite</p>
          <p>Zip Code</p>
          <p>City</p>
          <Styledbutton href="/editAddress">Edit Address</Styledbutton>
        </div>
      </MainContainer>
    </div>
  );
};

export default Dashboard;
