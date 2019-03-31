import React, { Component } from 'react'
import RecipesService from "../../service/recipes-service";
// import NavbarPage from "./NavbarPage"
import RecipeCard from "./RecipeCard"

export default class AllRecipes extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      recipes: [] 
    }
    this.service = new RecipesService();
  }

  getAllRecipes = () => {
    return this.service.getAllRecipes()
        .then(recipe => {
          console.log(recipe)
            this.setState({
                recipes: recipe
            })
        })
  }



  componentDidMount() {
      this.getAllRecipes()
  }

  render() {
    return (

      <div className="row">

        {/* <NavbarPage /> */}
      
        { this.state.recipes.map((oneRecipe, index) => <RecipeCard key={index} {...oneRecipe} />) }



      </div>
     
    )
  }
}
