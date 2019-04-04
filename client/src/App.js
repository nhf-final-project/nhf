import React, { Component } from 'react';
import './App.css';

// Components

import NavbarPage from "./components/app/Navbar-Footer/NavbarPage"
import Footer from "./components/app/Navbar-Footer/Footer"
import Signup2 from "./components/auth/Signup2"
import Home from "./components/app/Home/Home"
import Login from "./components/auth/Login"
import Profile from "./components/app/Profile"
import ProtectedRoutes from "./components/auth/ProtectedRoutes"
import AllRecipes from './components/app/Recipes/AllRecipes';
import RecipeDetails from './components/app/Recipes/RecipeDetails';

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


  fetchUser = () => {

      this.service.loggedin()
        .then(response => {
          console.log(response)
          this.setState({ loggedInUser: response })})
        .catch(x => this.setState({ loggedInUser: false }))
    
  }

  setTheUser = (userObj) => { this.setState({ loggedInUser: userObj }) }

  render() {

    const { loggedInUser } = this.state

    if (loggedInUser) {
      console.log("logeado")
      return (
        <div>
          <NavbarPage userInSession={this.state.loggedInUser} setUser={this.setTheUser} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recipes' component={AllRecipes} userInSession={this.loggedInUser} setUser={this.setTheUser} />
            <Route exact path='/recipes/:id' component={RecipeDetails} userInSession={this.loggedInUser} setUser={this.setTheUser} />
            <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} checkIfLogged={this.fetchUser}/>
          </Switch>
          <Footer />
        </div>
      )
    }
    else {
      return (
        <div>
          <NavbarPage userInSession={this.state.loggedInUser} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/recipes' component={AllRecipes} userInSession={this.loggedInUser} setUser={this.setTheUser} />
            <Route exact path='/recipes/:id' component={RecipeDetails} userInSession={this.loggedInUser} setUser={this.setTheUser}/>
            <Route exact path='/signup' render={() => <Signup2 setUser={this.setTheUser} userInSession={this.state.loggedInUser}/>} />
            <Route exact path='/login' render={() => <Login setUser={this.setTheUser} userInSession={this.state.loggedInUser} />} />   
            <ProtectedRoutes user={this.state.loggedInUser} exact path='/profile' component={Profile} />
            <Route exact path='/search' component={AllRecipes} />
          </Switch>
          <Footer />
        </div>
      )
    }
  }
}


export default App;

