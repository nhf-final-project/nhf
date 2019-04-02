import React, { Component } from 'react';
import './App.css';

// Components

import NavbarPage from "./components/app/NavbarPage"
import Signup2 from "./components/auth/Signup2"
import Home from "./components/app/Home"
import Login from "./components/auth/Login"
import Profile from "./components/app/Profile"
import ProtectedRoutes from "./components/auth/ProtectedRoutes"
import AllRecipes from './components/app/AllRecipes';
import RecipeDetails from './components/app/RecipeDetails';

// Routing & DOM
import { Switch, Route, Redirect } from 'react-router-dom'


// Service
import authService from './service/auth-service';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null }
    this.service = new authService()
    // this.checkLoggedin()
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

  checkLoggedin = () => {
    this.service.loggedin()
      .then(e=>{
        console.log(e)
        if(e) this.setState({ loggedInUser: e})
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

    if (loggedInUser) {
      console.log("logeado")
      return (
        <div>
          <Switch>
             {/* <Route exact path='/recipes/:id' component={RecipeDetails} user={this.loggedInUser} />             */}
            <Route exact path='/recipes' component={AllRecipes} />
            <Route exact path='/recipes/:id' component={RecipeDetails} user={this.loggedInUser} />
            <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} />
          </Switch>
        </div>
      )
    }
    else {
      return (
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recipes' component={AllRecipes} />
            <Route exact path='/recipes/:id' component={RecipeDetails}/>
            <Route exact path='/signup' render={() => <Signup2 setUser={this.setTheUser} user={this.loggedInUser}/>} />
            <Route exact path='/login' render={() => <Login setUser={this.setTheUser} user={this.loggedInUser} />} />   
            <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} />
            <Route exact path='/search' component={AllRecipes} />
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

