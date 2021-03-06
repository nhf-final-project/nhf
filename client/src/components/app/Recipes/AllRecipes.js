import React, { Component } from 'react'
import RecipesService from "../../../service/recipes-service";
import NavbarPage from "../Navbar-Footer/NavbarPage"
import RecipeCard from "./RecipeCard"
import Footer from "../Navbar-Footer/Footer"
import SearchByHealthLabel from "./SearchByHealthLabel"
import "./RecipeCard.css"

import { MDBInput, MDBContainer } from 'mdbreact';


// import backgroundImage from '../../images/background-recipe-01-edit.jpg'

export default class AllRecipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchValue: [],
      name: "",
      recipes: [],
      copia: [],
      filtered: false,
      loggedInUser: null,
      checkBoxes: {
        Vegetarian: false,
        Vegan: false,
        ["Peanut-Free"]: false,
        ["Sugar-Conscious"]: false,
        ["Tree-Nut-Free"]: false,
        ["Alcohol-Free"]: false
      },
      // backgroundImage: backgroundImage
    }
    this.myRef = React.createRef()
    this.service = new RecipesService();
  }

  getAllRecipes = () => {
    return this.service.getAllRecipes()
      .then(recipe => this.setState({...this.state, recipes: recipe, copia: recipe }))
  }

  searchRecipe = (searchName, searchValue) => {

    let recipesCopy = [...this.state.copia]

    recipesCopy = recipesCopy.filter(recipe => {
      if(searchValue.length !== 0 || this.state.name.length !== 0) {
        // return recipe.ingredientLines.join().includes(searchName)
        return recipe.healthLabels.includes(searchValue[searchValue.length - 1])  &&
                recipe.label.toLowerCase().includes(searchName.toLowerCase())         
        }       
      })
      
      console.log(recipesCopy)
      this.setState({...this.state,
        copia:recipesCopy,
        filtered: false
      })
  }

  filterRecipe = (e) => {
    let { checked, id, name, value } = e.target
  
    // let expression = /^[0-9.]$/
    // console.log(expression.test(id))
    // if(expression.test(id)){
    //   console.log(id)
    // }

    if (checked) {
      let arrayFilter = [...this.state.searchValue]
      arrayFilter.push(id)
      this.setState({
        [name]: value,
        searchValue: arrayFilter,
        filtered: true,
        checkBoxes: { ...this.state.checkBoxes, [id]:checked }

      }, () => this.searchRecipe(this.state.name, this.state.searchValue))
    } else {
      let arrayFilter = [...this.state.searchValue]
      arrayFilter = arrayFilter.filter(fil => fil !== id)
      this.setState({
          [name]: value,
          searchValue: arrayFilter,
          filtered: false,
          checkBoxes: { ...this.state.checkBoxes, [id]:checked }
      },() =>  this.lookForRecipe())  
    }
  }

  lookForRecipe = () => {
    let copyCheckboxes = {...this.state.checkBoxes}
    let keys = Object.keys(copyCheckboxes)

    keys = keys.filter(key => { return copyCheckboxes[key] === true })
    const filter = keys.reduce((acc, key) => {
      return acc.filter(recipe => recipe.healthLabels.includes(key))
    },this.state.recipes).filter(recipe => recipe.label.toLowerCase().includes(this.state.name.toLowerCase()))

    console.log(filter)
    this.setState({ copia:filter })
  }

  componentDidMount() { 
    this.myRef.current.scrollTo(0, 0);
    this.getAllRecipes()
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  render() {
    return (
      <div ref={this.myRef} className="recipe-details-main">
          <MDBContainer>
            <MDBInput label="Search" size="lg" outline icon="search" type="text" name="name" value={this.state.name}  onChange={(e) => {this.filterRecipe(e)}} />
          </MDBContainer>
          <SearchByHealthLabel recipes={this.state.recipes} copia={this.state.copia} searchValue={this.state.searchValue} searchRecipe={this.searchRecipe} filterRecipe={this.filterRecipe} />
          <div className="row p-5">
            {Array.isArray(this.state.copia) ? this.state.copia.map((oneRecipe, index) => <RecipeCard key={index} {...oneRecipe} userInSession={this.state.loggedInUser} setUser={this.props.setTheUser}/>) : null}
          </div>
      </div>
    )
  }
}