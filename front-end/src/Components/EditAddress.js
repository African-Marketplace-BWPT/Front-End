import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const EditAddress = () => {
  return (
    <div>
      <Navbar />
      <h2>Edit Your Address</h2>
      <form>
        <input placeholder="Country" />
        <input placeholder="Full Name" />
        <input placeholder="Street Address" />
        <input placeholder="Apt/Suite" />
        <input placeholder="Zip Code" />
        <input placeholder="City" />
      </form>
      <Link to="/dashboard">Back to Dashboard</Link>
      <button type="submit">Update</button>
    </div>
  );
};

export default EditAddress;
