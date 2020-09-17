import React from 'react';
import {Link} from 'react-router-dom';

const SignIn = () =>{
    return(
        <div>
            <h1>SignIn</h1>
            <Link to='/'>SignUp</Link>
            <br />
            <Link to='/dashboard'>Dashboard</Link>
        </div>
        
    )
};

export default SignIn;
