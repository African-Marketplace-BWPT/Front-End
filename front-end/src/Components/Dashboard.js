import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Dashboard = () =>{
    return(
        <div>
            <h1>This is Dashboard</h1>
            <Navbar/>
            <Link to='/editAddress'>Edit Address</Link>
        </div>
        
    )
};

export default Dashboard;