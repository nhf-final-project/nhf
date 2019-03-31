import React, { Component } from 'react';
import './App.css';

// Components
import Signup2 from "./components/auth/Signup2"
import Home from "./components/app/Home"
import Login from "./components/auth/Login"
import Profile from "./components/app/Profile"
import ProtectedRoutes from "./components/auth/ProtectedRoutes"

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

  ceckLoggedin = () => {
    this.service.loggedin()
      .then(e=>{
        console.log(e)
        if(e) this.setState({ loggedInUser: true})
      })

  }

  logoutUser = () => {
    this.service.logout()
        .then(() => {
            this.setState({ loggedInUser: false });
           
        })
}


  render() {

    const { loggedInUser } = this.state

    console.log(this.loggedInUser)
    if (loggedInUser) {
      console.log("logeado")
      return (
        <div>
          <Switch>
            
            <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} />
          </Switch>
        </div>
      )
    }
    else {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/signup' render={() => <Signup2 setUser={this.setTheUser} user={this.loggedInUser}/>} />
            <Route exact path='/login' render={() => <Login setUser={this.setTheUser} user={this.loggedInUser} />} />
            <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} />
          </Switch>

          {/* <Route exact path='/signup' render={() => (
                    loggedInUser ? (
                      <Redirect to="/login" />
                    ) : (
                        <Signup setUser={this.setTheUser} />
                      )
                  )} /> */}


        </div>
      )
    }


  }

}


export default App;

