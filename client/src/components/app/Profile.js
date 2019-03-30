import React, { Component } from 'react'
import ProfileImage from '../../images/avatar.png'
import RecipesService from "../../service/recipes-service";


export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = { profileImage: ProfileImage, recipes: [] }
    this.service = new RecipesService();
  }

  getAllRecipes = () => {
    return this.service.getAllRecipes()
        .then(data => {
            this.setState({
                recipes: data
            })
        })
  }


  componentDidMount() {
      this.getAllRecipes()
  }

  render() {

    this.componentDidMount() 
    const { loggedInUser } = this.props

    return (
      <main>
        <header className="profile-header">
          <div>
             <img src="/open-iconic/svg/menu.svg"/>
             <a id="profile-menu">Menu</a>
          </div>
          <div>
              <h1>Hello,{loggedInUser.username}</h1>
              <img src={this.state.profileImage}></img>
          </div>
          <div>
              <h3>My collection</h3>
              <h3>Following</h3>         
          </div>    
        </header>
        
      </main>
    )
  }
}
