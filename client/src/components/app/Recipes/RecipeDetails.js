import React, { Component } from 'react';
import RecipesService from "../../../service/recipes-service";
import { MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBContainer } from 'mdbreact';
import "./RecipeDetails.css"
import NavbarPage from "../Navbar-Footer/NavbarPage"
import { Link } from 'react-router-dom'
import {  MDBIcon } from 'mdbreact';

class RecipeDetails extends Component {

  constructor (props) {
    super(props)

    this.state = {
        recipe: {},
        loggedInUser: null,
        addToMessage: "",
        modal14: false
    }
    this.service = new RecipesService();
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  componentDidMount() { this.getRecipe() }
  componentWillReceiveProps(nextProps) { this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })}

  getRecipe = () => {
    this.service.getOneRecipe(this.props.match.params.id)
      .then(response=>  {
        console.log(response)
        this.setState({recipe: response})        
      });
  }

  saveTheRecipe = () => {
    console.log(this.props.match.params.id)
    this.service.saveRecipe(this.props.match.params.id)
      .then(response  =>  {
        console.log(response)
        this.setState({addToMessage: "Succesfully added!"})
        return response});
  }

  render () {
    const {recipe} = this.state
    let calories =  parseFloat(recipe.calories).toFixed(2)

    let copyTotalNutrients = {...recipe.totalNutrients}
    let nutrients = []
    Object.values(copyTotalNutrients).map((value) => {
      let nutrientCopy = {...value}
      nutrientCopy.quantity = parseFloat(nutrientCopy.quantity).toFixed(2)
      return nutrients.push(nutrientCopy)
    })
    let otherNutrients = [], primaryNutrients = [], secondaryNutrients = [] 
   
    nutrients.map((nutrient) => {
      if(nutrient.label === "Carbs" || nutrient.label === "Fat" || nutrient.label === "Protein") primaryNutrients.push(nutrient)
      if(nutrient.label === "Fiber" || nutrient.label === "Sodium" || nutrient.label === "Cholesterol") secondaryNutrients.push(nutrient)
      else otherNutrients.push(nutrient)
    })

    return (
      <div >
        <div className="recipe-details-main">
          <MDBRow className="px-3">
            <MDBCol md="3" className="pt-4">             
              <img className="recipe-image img-fluid rounded z-depth-0" src={`${recipe.image}`} alt={`${recipe.label}`}/>
              <h2>{recipe.label}</h2>
              <h4><i className="fas fa-utensils"></i> {recipe.totalTime} mins to cook</h4>
              {recipe.healthLabels && recipe.healthLabels.map((label, idx) => {
                return <span className="labels" key={idx}>| {label} |</span>
              })}
              {/* { this.state.loggedInUser ?  */}
                <div>
                <br/>
                <button onClick={this.saveTheRecipe} className="save-to-btn my-2 mx-0"><i className="fas fa-heart"></i> Save to collection</button>
                <p className="text-center mt-2 add-to-message">{this.state.addToMessage}</p>
                </div>
                {/* : null } */}

              
            </MDBCol>
             
            <MDBCol md="6" className="pt-4">
                <h4 className="mb-2"><MDBIcon icon="clipboard-list"/> Ingredients:</h4>
                {recipe.ingredientLines && recipe.ingredientLines.map((ingredient, idx) => {
                  return <article className="ingredients" key={idx}><li>{ingredient}</li></article>
                })}                     
            </MDBCol> 

            <MDBCol md="3"  className="pt-4">                      
              <div className="single-recipe-totals">
                <h4><MDBIcon icon="balance-scale"/> Recipe Totals</h4>
                <p className="calories"><span>Calories:  {calories}</span></p>

                {primaryNutrients && primaryNutrients.map((nutrient, idx) => {
                    return <li key={idx} className="primary-nutrients">{nutrient.label}: {nutrient.quantity} {nutrient.unit}</li>
                })}

                <hr className="space-between"/>

                {secondaryNutrients && secondaryNutrients.map((nutrient, idx) => {
                    return <li key={idx} className="secondary-nutrients" >{nutrient.label}: {nutrient.quantity} {nutrient.unit}</li>
                })}

                <button onClick={this.toggle(14)} className="modal-btn my-2 mx-0"><i class="fas fa-list"></i> See detailed nutrition</button>
                <br/>
                <br/>
                <Link to={"/recipes"} className="home-btn mt-5 mb-2 mx-0 btn-block text-center"><i className="fas fa-home"></i> Back</Link>

                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered size="lg" className="my-modal">
                  <MDBModalHeader toggle={this.toggle(14)} className="my-modal">Total calories: <span>{calories}</span></MDBModalHeader>
                  <MDBModalBody className="my-modal">
                    <MDBContainer fluid className="text-white">
                      <MDBRow>
                        <MDBCol md="6">
                          {primaryNutrients && primaryNutrients.map((nutrient, idx) => {
                            return <li key={idx} className="nutrients-modal">{nutrient.label}:<span>{nutrient.quantity} {nutrient.unit}</span></li>
                          })}
                        </MDBCol>

                        <MDBCol md="6">
                          {otherNutrients && otherNutrients.map((nutrient, idx) => {
                            return <li key={idx} className="nutrients-modal" >{nutrient.label}: <span>{nutrient.quantity} {nutrient.unit}</span></li>
                          })}
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBModalBody>
                  <MDBModalFooter className="my-modal">
                    <button onClick={this.toggle(14)} className="modal-btn my-2 mx-0">Close</button>
                  </MDBModalFooter>
                </MDBModal>
              </div>
            </MDBCol>            
          </MDBRow>
        </div>
      </div>
    )
  }
}

export default RecipeDetails