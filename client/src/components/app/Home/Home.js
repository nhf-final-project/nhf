import React, { Component } from 'react'
import Reviews from "./Reviews"
import Footer from "../Navbar-Footer/Footer"
import HomeSection1 from "./HomeSection1"
import HomeSection2 from "./HomeSection2"

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <HomeSection1 />
        <HomeSection2 />
        <Reviews />
        <Footer />

      </div>
    )
  }
}
