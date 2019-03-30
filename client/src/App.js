import React, { Component } from 'react';
import './App.css';

// Components
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"
import Profile from "./components/app/Profile"
import Home from "./components/app/Home"

//import Navbar from "./components/Navbar"


// Routing & DOM
import { Switch, Route, Redirect } from 'react-router-dom'


// Service
import authService from './service/auth-service';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new authService()
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then(response => this.setState({ loggedInUser: response }))
        .catch(x => this.setState({ loggedInUser: false }))
    }
  }

  setTheUser = (userObj) => {
    this.setState({ loggedInUser: userObj })
  }


  render() {

    // this.fetchUser()

    const {loggedInUser} = this.state

      return (
        <div>
          <Route exact path='/signup' render={() => (
            loggedInUser ? (
              <Redirect to="/profile" />
            ) : (
                <Signup setUser={this.setTheUser} />
              )
          )} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/profile' render={() => <Profile />} />
          <Route exact path='/' render={() => <Home />} />
        </div>
      )
    }

  }


export default App;