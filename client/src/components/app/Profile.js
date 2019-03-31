import React, { Component } from 'react'
import ProfileImage from '../../images/avatar.png'
// import backgroundImage from '../../images/profile-background.jpg'


export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      profileImage: ProfileImage,
      // backgroundImage: backgroundImage
    }
  }


  render() {

    const { loggedInUser } = this.props

    return (
      <main>

        <header className="profile-header">
          <div>
             <img src="/open-iconic/svg/menu.svg"/>
             <a id="profile-menu">Menu</a>
          </div>
          <div className="user-greeting">
              <h1><span>Hello</span>, {loggedInUser.username}!</h1>
              <img className="profile-image" src={this.state.profileImage}></img>
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
