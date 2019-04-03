import React from 'react'
import { MDBRow, MDBCol } from 'mdbreact';

const RecipeUserCollection = ({image, label}) => {


  return (
    <MDBRow>
      <MDBCol className="img-fluid rounded float-left m-3 z-depth-1">
        <img src={`${image}`} style={{ height: 100, width: 100 }} className="img-fluid rounded float-left m-3 z-depth-1" alt=""/>
        <div className="m-3">
          <h3 className="font-weight-lighter">{label}:</h3> 
          <h5 className="font-weight-normal">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</h5>
          </div>
      </MDBCol>
    </MDBRow>
  )  
}

export default RecipeUserCollection