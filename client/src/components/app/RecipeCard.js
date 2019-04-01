import React from 'react'
import { Link } from 'react-router-dom'


const RecipeCard = ({image, label, _id}) => {

  return (
    
      <div className="card collection-card z-depth-1-half col-lg-3 one-recipe-card">
        <div className="view zoom">
          <img src={`${image}`} className="img-fluid"
              alt=""/>

          <Link className="view-beer-details" to={`/recipes/${_id}`}>
              <div className="stripe dark">
                 
                <p>{label}
                    <i className="fa fa-angle-right"></i>
                </p>
                 
              </div>
          </Link>
         
         </div>
      </div>
      
  )

  
}

export default RecipeCard


