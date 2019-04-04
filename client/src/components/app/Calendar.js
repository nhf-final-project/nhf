import React, { Component } from 'react'
import Modal from 'react-modal'
// import PlanMeal from './PlanMeal';
import ProfileService from "../../service/profile-service";
import { Link } from 'react-router-dom';


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

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

export default class Calendar extends Component {

  constructor(props) {

    super(props)
    this.props = props

    this.state = {
      modalIsOpen: false,
      calendar: {
        meal: '',
        day: ''
      },
      calendarPrograms: undefined
      // addedRecipe:  ''   
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.service = new ProfileService();

  }


  componentDidMount() {
    this.getCalendar()
  }



  // getCalendar = () => {

  //   return this.service.getCalendar(this.props.user._id, this.props.user.calendar._id)
  //     .then(calendar => {
  //       console.log(calendar)
  //       this.setState({...this.state, calendar: calendar})
  //     })
  // }

  componentDidMount = () => {
    this.service.getCalendarPrograms()
      .then(response => this.setState({ ...this.state, calendarPrograms: response }))
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleChange = (e) => {
    this.openModal()

    const { value } = e.target

    this.setState({
      calendar: {
        ...this.state.calendar,
        meal: value
      }
    })
  }

  handleState = (e) => {
    const { value } = e.target


    this.setState({
      calendar: {
        ...this.state.calendar,
        day: value
      }
    })
  }



  // getSelectedRecipe = (recipe) => {

  //    this.service.addToCalendar(this.props.user._id, recipe)

  // }

  handleSubmit = (e, recipe) => {
    e.preventDefault()


    this.service.addToCalendar(this.props.user._id, recipe, this.state.calendar)
      .then(response => this.setState({ ...this.state, calendarPrograms: response }))

    // this.services.addToCalendar(this.state.coaster)
    //     .then(x => this.props.refreshCoasters())

    this.setState({
      calendar: {
        ...this.state.calendar,
        meal: '',
        day: ''
      }
    })
    this.closeModal()
  }

  renderMealDay = (day, meal) => {

    if (this.state.calendarPrograms[day] !== undefined) {
      let recipesDay = Object.values(this.state.calendarPrograms[day]).filter((program) => program.meal === meal)

      return (
        <div>
          {recipesDay.map(recipe => <article><img src={recipe.recipe.image}/><p>{recipe.recipe.label}</p></article>)}
        </div>
      )
    } else {
      return <div></div>
    }


  }


  render() {
    const { user, recipes } = this.props
  
    console.log(this.state.calendarPrograms)

    return (
      <div>
        <table className="table table-hover">
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

              {
                this.state.calendarPrograms !== undefined && days.map((day) => 
                  <td>{this.renderMealDay(day, "breakfast")}</td>
                )
              }
            </tr>
            <tr>
              <th scope="row">Lunch</th>
              {
                this.state.calendarPrograms !== undefined && days.map((day) => 
                  <td>{this.renderMealDay(day, "lunch")}</td>
                )
              }
            </tr>
            <tr>
              <th scope="row">Snack</th>
              {
                this.state.calendarPrograms !== undefined && days.map((day) => 
                  <td>{this.renderMealDay(day, "snack")}</td>
                )
              }
            </tr>
            <tr>
              <th scope="row">Dinner</th>
              {
                this.state.calendarPrograms !== undefined && days.map((day) => 
                  <td>{this.renderMealDay(day, "dinner")}</td>
                )
              }
            </tr>
          </tbody>
        </table>
        <div className="form-group col-6">
          <label>Plan your meal</label>
          <select type="text" name="meal" value={this.state.meals} className="form-control" onChange={(e) => this.handleChange(e)}>
            <option></option>
            <option>breakfast</option>
            <option>lunch</option>
            <option>snack</option>
            <option>dinner</option>
          </select>
        </div>


        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>

          <div>
            <div className="form-group col-6">
              <form >
                <label>Choose day</label>
                <select type="text" name="day" value={this.state.days} className="form-control" onChange={(e) => this.handleState(e)}>
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
            {(recipes.length === 0) && <small>Don't have a collection of recipes? <Link to={"/recipes"} className="links"> Go to recipes </Link></small>}

            {(recipes.length !== 0) && recipes.map((recipe, idx) => {
              const calorieDecimals = parseFloat(recipe.calories).toFixed(2)
              return <article className="user-recipe" key={idx}><img src={recipe.image} alt={recipe.label} /><h4>{recipe.label}</h4><p>Calories:{calorieDecimals}</p><p>Quantity:{recipe.totalWeight} g</p><button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e, recipe._id)}>Add Recipe</button></article>
            })}
          </div>

        </Modal>


      </div >
    )
  }
}
