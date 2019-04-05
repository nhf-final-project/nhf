import React, { Component } from 'react'
import ProfileService from "../../service/profile-service";
import { Link } from 'react-router-dom';

import { MDBRow, MDBCol, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBContainer } from 'mdbreact';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default class Calendar extends Component {

  constructor(props) {

    super(props)
    this.props = props

    this.state = {
      calendar: {
        meal: '',
        day: '',
      },
      calendarPrograms: undefined,
      modal14: false
    }
    this.service = new ProfileService();
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    console.log("jelouuuuu")
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  componentDidMount = () => {
    this.service.getCalendarPrograms()
      .then(response => this.setState({ ...this.state, calendarPrograms: response }))
  }

  handleChange = (e) => {
    let modalNumber = 'modal' + 14
    const { value } = e.target
    this.setState({ 
      calendar: { ...this.state.calendar, meal: value },
      [modalNumber]: !this.state[modalNumber]
     })
  }

  handleState = (e) => {
    const { value } = e.target
    this.setState({ calendar: { ...this.state.calendar, day: value } })
  }

  handleSubmit = (e, recipe) => {
    e.preventDefault()
    let modalNumber = 'modal' + 14


    this.service.addToCalendar(this.props.user._id, recipe, this.state.calendar)
      .then(response => {
        this.setState({
          ...this.state, calendarPrograms: response ,
          calendar: { ...this.state.calendar, meal: '', day: '' },
          [modalNumber]: !this.state[modalNumber]
        })
    })
  }

  renderMealDay = (day, meal) => {
    if (this.state.calendarPrograms[day] !== undefined) {
      let recipesDay = Object.values(this.state.calendarPrograms[day]).filter((program) => program.meal === meal)

      return (
        <div>
          {recipesDay.map(recipe => <article><img className="rounded z-depth-0" style={{ height: 50, width: 50 }} src={recipe.recipe.image} alt="recipe"/><p>{recipe.recipe.label}</p></article>)}
        </div>
      )
    } else { return <div></div> }
  }


  render() {
    const { user, recipes } = this.props
  
    return (
      <div>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>
              <th scope="col">Sunday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Breakfast</th>
              { this.state.calendarPrograms !== undefined && days.map((day) => <td>{this.renderMealDay(day, "breakfast")}</td> ) }
            </tr>
            <tr>
              <th scope="row">Lunch</th>
              { this.state.calendarPrograms !== undefined && days.map((day) => <td>{this.renderMealDay(day, "lunch")}</td> ) }
            </tr>
            <tr>
              <th scope="row">Snack</th>
              { this.state.calendarPrograms !== undefined && days.map((day) => <td>{this.renderMealDay(day, "snack")}</td> ) }
            </tr>
            <tr>
              <th scope="row">Dinner</th>
              { this.state.calendarPrograms !== undefined && days.map((day) => <td>{this.renderMealDay(day, "dinner")}</td> ) }
            </tr>
          </tbody>
        </table>
        <div className="form-group col-12">
          <label>Plan your meal</label>
          <select type="text" name="meal" value={this.state.meals} className="form-control" onChange={e => this.handleChange(e)}>
            <option></option>
            <option>breakfast</option>
            <option>lunch</option>
            <option>snack</option>
            <option>dinner</option>
          </select>
        </div>

        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered size="lg" className="my-modal">
          <MDBModalHeader toggle={this.toggle(14)} className="my-modal">
            <form >
              <label className="text-white text-center">Choose day</label>
              <select type="text" name="day" value={this.state.days} className="form-control col-12" onChange={(e) => this.handleState(e)}>
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
          </MDBModalHeader>
          <MDBModalBody className="my-modal">
            <MDBContainer fluid className="text-white">
              <MDBRow>
                <MDBCol md="12">
                  {(recipes.length === 0) && <small>Don't have a collection of recipes? <Link to={"/recipes"} className="links"> Go to recipes </Link></small>}
                  {(recipes.length !== 0) && recipes.map((recipe, idx) => {
                    const calorieDecimals = parseFloat(recipe.calories).toFixed(2)
                    return  <article className="user-recipe" key={idx}>
                              <MDBRow>
                                <MDBCol md="1">
                                <img className="recipe-image rounded z-depth-0" style={{ height: 50, width: 50 }} src={recipe.image} alt={recipe.label} />
                                </MDBCol>
                                <MDBCol md="4">
                                <h4>{recipe.label}</h4>
                                </MDBCol>
                                <MDBCol md="4">
                                <p>Calories:{calorieDecimals}</p>
                                <p>Quantity:{recipe.totalWeight} g</p>
                                </MDBCol>
                                <MDBCol md="3">
                                <button type="submit" className="save-to-btn my-2 mx-0" onClick={(e) => this.handleSubmit(e, recipe._id)}><i className="fas fa-heart"></i> Add Recipe</button>
                                </MDBCol>
                              </MDBRow>
                              <hr className="hr-modified" />
                            </article>
                            
                          
                             
                  })}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter className="my-modal">
            <button onClick={this.toggle(14)} className="modal-btn my-2 mx-0">Close</button>
          </MDBModalFooter>
        </MDBModal>
      </div >
    )
  }
}
