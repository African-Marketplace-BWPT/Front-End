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
  border-radius: 8px;
  text-decoration: none;
  &a:visited {
    color: white;
  }
  &:hover {
    color: #f07736;
  }
`;

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="leftContainer">
          <h3>My Account</h3>
          <h2>Welcome back, Insert Username Here</h2>
          <Styledbutton href="/myListing">My Listings</Styledbutton>
        </div>

        <div className="userInfo">
          <p>Address:</p>
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
