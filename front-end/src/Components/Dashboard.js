import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="mainContainer">
        <div className="leftContainer">
          <h3>Welcome back, Insert Username Here</h3>
          <h3>My Account</h3>
        </div>

        <div className="userInfo">
          <p>Name</p>
          <p>Street Address</p>
          <p>Apt/Suite</p>
          <p>Zip Code</p>
          <p>City</p>
          <Link to="/editAddress">Edit Address</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
