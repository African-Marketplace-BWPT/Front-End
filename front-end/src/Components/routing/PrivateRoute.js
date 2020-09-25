import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PrivateRoute = ({
    component: Component,
    auth: isAuthenticated,
    ...rest
}) => (
    <Route
    {...rest}
    render={(props) =>
    !isAuthenticated || isAuthenticated === null ? (
        <Redirect to='/' />
    ) : (
        <Component {...props} />
    )
    } 
    />
);

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         localStorage.getItem("token") ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/" />
//         )
//       }
//     />
//   );


PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect (mapStateToProps)(PrivateRoute);