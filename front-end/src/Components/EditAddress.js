import React from 'react';
import {Link} from 'react-router-dom';

const EditAddress = () => {
    return(
        <div>
            <p>Edit Address</p>
            <Link to='/dashboard'>Back to Dashboard</Link>
        </div>
    )
};

export default EditAddress;