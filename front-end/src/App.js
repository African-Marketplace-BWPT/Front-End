import React, {useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Store';



import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AllListing from './Components/AllListing';
import MyListing from './Components/MyListing';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import EditAddress from './Components/EditAddress';
import CreateListing from './Components/CreateListing';
import EditMyListing from './Components/EditMyListing';
import ItemCard from './Components/ItemCardMyListing';
import setAuthToken from './utils/setAuthToken';

import PrivateRoute from './Components/routing/PrivateRoute';
import {setUserData} from './actions/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

function App() {

  useEffect(() => {
    setAuthToken(localStorage.token);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      store.dispatch(setUserData(user));
    } else {
      return;
    }
  });


  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={SignUp}/>
            <Route exact path='/signIn' component={SignIn}/>
            
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/editAddress' component={EditAddress}/>
            <PrivateRoute exact path='/myListing' component={MyListing} itemCard={ItemCard}/>
            <PrivateRoute exact path='/createListing' component={CreateListing}/>
            <PrivateRoute path='/editMyListing/:id' component={EditMyListing}/>
            <PrivateRoute exact path='/allListing' component={AllListing} itemCard={ItemCard}/>
            <PrivateRoute exact path='/itemCard' component={ItemCard}/>
            <PrivateRoute exact path='/cart' component={Cart}/>
            <PrivateRoute exact path='/checkout' component={Checkout}/>

          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
