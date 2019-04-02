import React from 'react'
import { Link } from 'react-router-dom'
import { MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';


const RecipeCard = ({image, label, _id}) => {

  return (
    <MDBRow className="m-2 p-2">
    <MDBCol ml="4" >  
        <div className="card collection-card z-depth-1-half col-lg-3">
            <div className="view zoom">
            <img src={`${image}`} className="img-fluid"
                alt=""/>

            <Link className="view-recipe-details" to={`/recipes/${_id}`}>
                <div className="stripe dark">
                    
                    <p>{label}
                        <i className="fa fa-angle-right"></i>
                    </p>
                    
                </div>
            </Link>
            
            </div>
        </div>
      </MDBCol>  
    </MDBRow>

      
  )

  
}

export default RecipeCard


