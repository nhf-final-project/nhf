import React, { Component } from 'react';
import RecipesService from "../../service/recipes-service";
import { MDBRow, MDBCol, MDBView, MDBMask } from 'mdbreact';
import Modal from 'react-modal'
import "./RecipeDetails.css"
import NavbarPage from "./NavbarPage"
import backgroundImage from '../../images/background-recipe-01-edit.jpg'
import modalImg from '../../images/modal-image-01-edit.jpg'
import { Link } from 'react-router-dom'



const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      background: `url(${modalImg})`

  }
 
}

Modal.setAppElement('#root')

class RecipeDetails extends Component {

  constructor (props) {
    super(props)

    this.state = {
        recipe: {},
        loggedInUser: null,
        addToMessage: "",
        backgroundImage: backgroundImage
    }

    this.service = new RecipesService();
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
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

  saveTheRecipe = () => {
    
    this.service.saveRecipe(this.props.match.params.id)
    .then(response  =>  {
      this.state.addToMessage = "Succesfully added!"
      return response});
    
  }

 
  render () {
    console.log(this.state.userInSession)
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


    let otherNutrients = []
    let primaryNutrients = []
    let secondaryNutrients = [] 
   
    let copyNutrients = nutrients.map((nutrient) => {


      if(nutrient.label === "Carbs" || nutrient.label === "Fat" || nutrient.label === "Protein") primaryNutrients.push(nutrient)
      if(nutrient.label === "Fiber" || nutrient.label === "Sodium" || nutrient.label === "Cholesterol") secondaryNutrients.push(nutrient)
      else otherNutrients.push(nutrient)
    })

    return (

          <MDBView src={this.state.backgroundImage}>
          <MDBMask overlay="black-light" className="recipe-details-main">
          <NavbarPage />
            
            <MDBRow className="m-2 p-2">

              <MDBCol ml="4" className="title-image">             
                  <img className="recipe-image" src={`${recipe.image}`} alt={`${recipe.label}`}/>
                  <h2>{recipe.label}</h2> 
              </MDBCol>
             
              <MDBCol md="4 ingredients-container"> 
                <div className="single-recipe-ingredients">
                    <h4>Ingredients:</h4>
                    {recipe.ingredientLines &&
                    recipe.ingredientLines.map((ingredient, idx) => {
                      return <article className="ingredients" key={idx}><li>{ingredient}</li></article>
                    })}                     
                </div>
              </MDBCol> 

              
              <MDBCol md="4 nutrients-container">  
                <div className="single-recipe-labels">                    
                    <i className="fas fa-utensils"></i><p>{recipe.totalTime} mins to cook</p>
                    {recipe.healthLabels &&
                    recipe.healthLabels.map((label, idx) => {
                      return <article className="labels" key={idx}><li>{label}</li></article>
                    })}
                </div>

                <i className="fas fa-heart"></i><button onClick={this.saveTheRecipe} className="save-to-btn">Save to collection</button>

                <p className="add-to-message">{this.state.addToMessage}</p>

                <div className="single-recipe-totals">
                    <h4>Recipe Totals</h4>
                    <p className="calories"><span>Calories:  {calories}</span></p>

                    {primaryNutrients &&
                    primaryNutrients.map((nutrient, idx) => {
                        return <li key={idx} className="primary-nutrients">{nutrient.label}: {nutrient.quantity} {nutrient.unit}</li>
                    })}

                    <hr className="space-between"/>

                    {secondaryNutrients &&
                    secondaryNutrients.map((nutrient, idx) => {
                        return <li key={idx} className="secondary-nutrients" >{nutrient.label}: {nutrient.quantity} {nutrient.unit}</li>
                    })}

                    <i class="fas fa-list"></i><button onClick={this.openModal} className="modal-btn">See detailed nutrition</button>
                      <br/>
                      <i className="fas fa-home"></i><Link to={"/"} className="home-btn">Home Page</Link>

                    <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
                        <h5>Total calories: <span>{calories}</span></h5>

                        <hr className="space-between" />

                        {primaryNutrients &&
                        primaryNutrients.map((nutrient, idx) => {
                          return <li key={idx} className="nutrients-modal">{nutrient.label}:<span>{nutrient.quantity} {nutrient.unit}</span></li>
                        })}

                        <hr className="space-between" />

                        {otherNutrients &&
                        otherNutrients.map((nutrient, idx) => {
                          return <li key={idx} className="nutrients-modal" >{nutrient.label}: <span>{nutrient.quantity} {nutrient.unit}</span></li>
                        })}
                    </Modal>
                </div>
              </MDBCol>  
                       
            </MDBRow>
            
            </MDBMask>
            </MDBView>
     

 
      
    )
}
}



export default RecipeDetails

