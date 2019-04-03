import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({image, label, _id}) => {

  return (
    <div className="col-lg-4 col-md-6 mb-4"> 
        <div className="one-recipe-card card collection-card z-depth-1-half">
            <div className="view zoom">
              <img src={`${image}`} className="img-fluid" alt=""/>
              <Link className="view-recipe-details" to={`/recipes/${_id}`}>
                  <div className="stripe dark"><p>{label} <i className="fa fa-angle-right"></i></p></div>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default RecipeCard


