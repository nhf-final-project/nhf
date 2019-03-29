import React, { Component } from 'react';
import './App.css';

// Components
import Signup from "./components/auth/Signup"
import Login from "./components/auth/Login"
//import Navbar from "./components/Navbar"


// Routing & DOM
import { Switch, Route } from 'react-router-dom'


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

    if (!this.state.loggedInUser) {
      return (
        <div>

            <Route exact path='/signup' render={() => <Signup setUser={this.setTheUser} />} />
            <Route exact path='/login' render={() => <Login />} />
        </div>
      )
    }

  }
}

export default App;