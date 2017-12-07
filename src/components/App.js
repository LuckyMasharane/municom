import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import Login from './Login';
import NavbarComponents from './Navbar';
import Signup from './Signup';
import Home from './Home';
import Footer from './Footer';
import Profile from './profile';
import Incident from './Incident';
import Request from './Request';
import Complaint from './Complaint';
import notificat from './notification';
import editprofile from './edit-profile';



class App extends Component{
  constructor(){
    super()
    
    this.userLogout = this.userLogout.bind(this);
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <NavbarComponents logout={this.userLogout} />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/edit-profile" component={editprofile} />
          <Route path="/notifications" component={notificat} />
          <Route path="/incident" component={Incident} />
          <Route path="/complaint" component={Complaint} />
          <Route path="/request" component={Request} />
          <Footer/>

        </div>
      </BrowserRouter>
    )
  }

  async userLogout(){
    fetch('https://municom.herokuapp.com/api/user/logout', {credentials: "include"})
    .then(res =>{window.location.reload()});
  }
}


export default connect(null, actions)(App);
