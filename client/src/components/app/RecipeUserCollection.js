import React from 'react'
import { MDBMedia } from 'mdbreact';

const RecipeUserCollection = ({image, label}) => {


  return (

    <MDBMedia>
        {/* <MDBMedia left className="mr-3" href="#"> */}
        <img className="recipe-image mr-3" src={`${image}`} alt={label}/>
          {/* <MDBMedia className="recipe-image" object src={`${image}`} alt={label} /> */}
        {/* </MDBMedia> */}
        <MDBMedia body>
          <MDBMedia heading>
           {label}
        </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </MDBMedia>
  </MDBMedia>
      
  )  
}

export default RecipeUserCollection