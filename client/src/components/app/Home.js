import React, { Component } from 'react'
import NavbarPage from "./NavbarPage"
import Intro from "./Intro"



import CardFood from "./CardFood"
import CardExample from "./CardExample"
import Signup2 from "../auth/Signup2"
import Form from "../auth/Form"
import ThumbnailsCarouselPage from "../auth/ThumbnailsCarouselPage"


export default class Home extends Component {
  render() {
    return (
      <div>
        {/* <NavbarPage /> */}
        
        <CardFood />
        {/* <CardExample />

        <Signup2 />


        <ThumbnailsCarouselPage /> */}

        {/* <Form /> */}

        <Signup2 />

        {/* <Intro /> */}

      </div>
    )
  }
}
