import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: Poppin;
  color: #2b2c2d;
`;

const Styledbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  border-radius: 8px;
  background-color: #f07736;
  &:hover {
    background-color: white;
  }
`;

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <MainContainer>
        <div className="leftContainer">
          <h2>Welcome back, Insert Username Here</h2>
          <h3>My Account</h3>
        </div>

        <div className="userInfo">
          <p>Name</p>
          <p>Street Address</p>
          <p>Apt/Suite</p>
          <p>Zip Code</p>
          <p>City</p>
          <Styledbutton>
            <a href="/editAddress">Edit Address</a>
          </Styledbutton>
        </div>
      </MainContainer>
    </div>
  );
};

export default Dashboard;
