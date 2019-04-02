import React, { Component } from 'react'
import NavbarPage from "./NavbarPage"
import Reviews from "./Reviews"
import Footer from "./Footer"
import HomeSection from "./HomeSection"
import Card from './Card'


export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        
        
        <HomeSection />
        <Card />
        <HomeSection />
        <Reviews />
        <Footer />







      </div>
    )
  }
}
