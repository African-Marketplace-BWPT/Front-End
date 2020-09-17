import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
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
import ItemCard from './Components/ItemCard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/signIn' component={SignIn}/>
        
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/editAddress' component={EditAddress}/>
        <Route exact path='/myListing' component={MyListing}/>
        <Route exact path='/createListing' component={CreateListing}/>
        <Route exact path='/editMyListing' component={EditMyListing}/>
        <Route exact path='/allListing' component={AllListing}/>
        <Route exact path='/itemCard' component={ItemCard}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/checkout' component={Checkout}/>

      </Switch>
    </Router>
  );
}

export default App;
