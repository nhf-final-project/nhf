import React, { Component } from 'react'
import NavbarPage from "./NavbarPage"
import Reviews from "./Reviews"
import Footer from "./Footer"



import CardFood from "./CardFood"
import HomeSection from "./HomeSection"
import Signup2 from "../auth/Signup2"
import Form from "../auth/Form"
import ThumbnailsCarouselPage from "../auth/ThumbnailsCarouselPage"


export default class Home extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        
        
        <HomeSection />
        <HomeSection />
        <Reviews />
        <Footer />
        {/* <CardExample />

        <Signup2 />


        <ThumbnailsCarouselPage /> */}

        {/* <Form /> */}

        {/* <Signup2 /> */}

        {/* <Intro /> */}

      </div>
    )
  }
}
