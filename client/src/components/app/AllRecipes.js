import React, { Component } from 'react'
import RecipesService from "../../service/recipes-service";
import NavbarPage from "./NavbarPage"
import RecipeCard from "./RecipeCard"
import Footer from "./Footer"
import SearchByHealthLabel from "./SearchByHealthLabel"
import "./RecipeCard.css"

// import backgroundImage from '../../images/background-recipe-01-edit.jpg'



export default class AllRecipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchValue: [],
      recipes: [],
      copia: [],
      filtered: false,
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
    this.service = new RecipesService();
  }

  getAllRecipes = () => {
    return this.service.getAllRecipes()
      .then(recipe => {
        this.setState({...this.state,
          recipes: recipe,
          copia: recipe,
        })
      })
  }

  searchRecipe = (searchValue) => {

    let recipesCopy = [...this.state.copia]

    recipesCopy = recipesCopy.filter(recipe => {
      if(searchValue.length !== 0) {

        return recipe.healthLabels.includes(searchValue[searchValue.length - 1])          
        }       
      })
      
      console.log(recipesCopy)
      this.setState({...this.state,
        copia:recipesCopy,
        filtered: false
      })

  }

  filterRecipe = (e) => {
    let { checked, id } = e.target

    // let expression = /^[0-9.]$/
    // console.log(expression.test(id))
    // if(expression.test(id)){
    //   console.log(id)
    // }

    if (checked) {
      let arrayFilter = [...this.state.searchValue]
      arrayFilter.push(id)
      this.setState({
        searchValue: arrayFilter,
        filtered: true,
        checkBoxes: {
          ...this.state.checkBoxes,
          [id]:checked
        }

      }, () => this.searchRecipe(this.state.searchValue))
    } else {
      let arrayFilter = [...this.state.searchValue]
      arrayFilter = arrayFilter.filter(fil => fil !== id)
      this.setState({
          searchValue: arrayFilter,
          filtered: false,
          checkBoxes: {
            ...this.state.checkBoxes,
            [id]:checked
          }
      },() =>  this.lookForRecipe())  
    }

  }

  lookForRecipe = () => {
    let copyCheckboxes = {...this.state.checkBoxes}
    let keys = Object.keys(copyCheckboxes)

    keys = keys.filter(key => { return copyCheckboxes[key] === true })
    keys.reduce((acc, key) => {
      return acc.filter(recipe => recipe.healthLabels.includes(key))
    },this.state.recipes)
  }

  componentDidMount() { this.getAllRecipes() }

  render() {
    return (
      <div className="recipe-details-main">
          <NavbarPage />
          <SearchByHealthLabel recipes={this.state.recipes} copia={this.state.copia} searchValue={this.state.searchValue} searchRecipe={this.searchRecipe} filterRecipe={this.filterRecipe} />
          <div className="m-5">
            <div className="row">
            {this.state.recipes.map((oneRecipe, index) => <RecipeCard key={index} {...oneRecipe} />)}
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}