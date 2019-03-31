import React, { Component } from 'react';
import RecipesService from "../../service/recipes-service";
import Modal from 'react-modal'
import "./RecipeDetails.css"

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%'
  }
}

Modal.setAppElement('#root')

class RecipeDetails extends Component {

  constructor (props) {
    super(props)

    this.state = {
        recipe: {},
        modalIsOpen: false,
    }

    this.service = new RecipesService();
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }


  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.getRecipe()
 
   
  }

  getRecipe = () => {
    this.service.getOneRecipe(this.props.match.params.id)
    .then(response=>  {
      this.setState({recipe: response})        
      });

  }

 
  render () {

    const {recipe} = this.state
    let calories =  parseFloat(recipe.calories).toFixed(2)

    let copyTotalNutrients = {...recipe.totalNutrients}
    console.log(copyTotalNutrients)
    let nutrients = []
    let objectCopy = Object.values(copyTotalNutrients).map((value) => {
      let nutrientCopy = {...value}
      nutrientCopy.quantity = parseFloat(nutrientCopy.quantity).toFixed(2)
      nutrients.push(nutrientCopy)  
    })
    console.log(nutrients)

    let otherNutrients = []
    let primaryNutrients = []
    let secondaryNutrients = [] 
   
    let copyNutrients = nutrients.map((nutrient) => {
      console.log(nutrient)

      if(nutrient.label === "Carbs" || nutrient.label === "Fat" || nutrient.label === "Protein") primaryNutrients.push(nutrient)
      if(nutrient.label === "Fiber" || nutrient.label === "Sodium" || nutrient.label === "Cholesterol") secondaryNutrients.push(nutrient)
      else otherNutrients.push(nutrient)
    })

    console.log(otherNutrients)
    console.log(primaryNutrients)

 
    return (
        <main> 
            <div className="single-recipe-card">
            
                <img src={`${recipe.image}`} alt={`${recipe.label}`}/>
                <div>
                  <div className="single-recipe-top">
                      <h2>{recipe.label}</h2>
                      <p>{recipe.totalTime} mins to cook</p>
                      {recipe.healthLabels &&
                      recipe.healthLabels.map((label, idx) => {
                        return <article className="labels" key={idx}><li>{label}</li></article>
                      })}
                  </div>
                  
                  <div className="single-recipe-ingredients">
                      <h3>Ingredients:</h3>
                      {recipe.ingredientLines &&
                      recipe.ingredientLines.map((ingredient, idx) => {
                        return <article className="ingredients" key={idx}><li>{ingredient}</li></article>
                      })}                     
                  </div>

                  <div className="single-recipe-totals">
                      <h3>Recipe Totals:</h3>
                      <p className="calories"><span>Calories:</span>  {calories}</p>

                      {primaryNutrients &&
                      primaryNutrients.map((nutrient, idx) => {
                         return <li  key={idx} className="primary-nutrients">{nutrient.label}: {nutrient.quantity} {nutrient.unit}</li>
                      })}

                      {secondaryNutrients &&
                      secondaryNutrients.map((nutrient, idx) => {
                         return <li key={idx} className="secondary-nutrients" >{nutrient.label}: {nutrient.quantity} {nutrient.unit}</li>
                      })}

                      <button onClick={this.openModal} className="btn btn-primary">Detailed Nutrition:</button>
                      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
                          <p>Total calories: {calories}</p>

                          <hr className="space-between" />

                          {primaryNutrients &&
                          primaryNutrients.map((nutrient, idx) => {
                            return <li key={idx} className="nutrients-modal"><span>{nutrient.label}</span>: {nutrient.quantity} {nutrient.unit}</li>
                          })}

                          <hr className="space-between" />

                          {otherNutrients &&
                          otherNutrients.map((nutrient, idx) => {
                            return <li key={idx} className="nutrients-modal" ><span>{nutrient.label}</span>: {nutrient.quantity} {nutrient.unit}</li>
                          })}
                      </Modal>
                                       
                  </div>

                </div>
             
                
            </div>
        </main>
    )
}
}

// 

export default RecipeDetails

