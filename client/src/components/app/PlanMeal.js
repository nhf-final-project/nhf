import React, { Component } from 'react'
import ProfileService from "../../service/profile-service";

export default class PlanMeal extends Component {

  constructor(props) {

    super(props)
    this.props = props
    this.state = { 
      recipes: []
    }

    this.service = new ProfileService();
  }

  getSavedRecipes = () => {
    return this.service.getSavedRecipes()
      .then(recipe => {
        console.log(recipe)
        this.setState({
          recipes: recipe.recipes      
        })
      })
  }


  componentDidMount() {
    this.getSavedRecipes()
  }
  


  render() {
    const {user} = this.props
    console.log(this.props)

    return (
      <div>
        <div className="form-group col-6">
        <form onSubmit={this.handleSubmit}>
          <label>Choose day</label>
          <select type="text" name="trainingDays" className="form-control" onChange={this.openModal}>
            <option></option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </form>
        </div>
          {(this.state.recipes.length === 0) && <p>Don't have recipes?</p> }

          {(this.state.recipes.length !== 0) && this.state.recipes.map((recipe, idx) => {
          return <article className="user-recipe" key={idx}><img src={recipe.image} alt={recipe.label}/><button onClick={() => this.props.closeModal()} type="submit" className="btn btn-primary">Add</button></article> 
        })}
        
      </div>
    )
  }
}
