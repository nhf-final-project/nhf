import React, { Component } from 'react'
import Modal from 'react-modal'
// import PlanMeal from './PlanMeal';
import ProfileService from "../../service/profile-service";
import { Link } from 'react-router-dom';


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
      meals: '',
      days: '',
      addedRecipe:  ''   
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

  componentDidMount= () => { 
    
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleChange = (e) => {
    this.openModal()

    const {value} = e.target
    console.log(value)
    this.setState({
      meals: value
    })
  }

  handleState = (e) => {
    const {value} = e.target
    console.log(value)

    this.setState({
      days: value
    })
  }

  // getSelectedRecipe = (recipe) => {

  //    this.service.addToCalendar(this.props.user._id, recipe)

  // }

  handleSubmit = (e, recipe) => {
    e.preventDefault()
    console.log(this.props.user._id, recipe)
    
    this.service.addToCalendar(this.props.user, recipe, this.state.meals, this.state.days)
  
   


    // this.services.addToCalendar(this.state.coaster)
    //     .then(x => this.props.refreshCoasters())

    this.setState({
        meals: '',
        days: '',
    })
    this.closeModal()
}


  render() {
    const {user, recipes} = this.props
    
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
              {/* {Object.keys(user.calendar.breakfast).map((day,idx) => (
                <td>{Object.values(user.calendar.breakfast[day]).map((recetas,idx)=> (<div>hola</div>))}</td>
              ) )} */}
            </tr>
            <tr>
              {/* <th scope="row">Lunch</th>
              {Object.keys(user.calendar.lunch).map(day => (
                <td>{Object.values(user.calendar.lunch[day]).map(recetas => (<div>hola</div>))}</td>
              ) )} */}
            </tr>
            <tr>
              <th scope="row">Snack</th>
              {/* {Object.keys(user.calendar.snack).map(day => (
                <td>{Object.values(user.calendar.snack[day]).map(recetas => (<div>hola</div>))}</td>
              ) )} */}
            </tr>
            <tr>
              <th scope="row">Dinner</th>
              {/* {Object.keys(user.calendar.dinner).map(day => (
                <td>{Object.values(user.calendar.dinner[day]).map(recetas => (<div>hola</div>))}</td>
              ) )} */}
            </tr>
          </tbody>
        </table>
        <div className="form-group col-6">
          <label>Plan your meal</label>
          <select type="text" name="meals" value={this.state.meals} className="form-control" onChange={(e) => this.handleChange(e)}>
            <option></option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Snack</option>
            <option>Dinner</option>
          </select>
        </div>


        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
        
          <div>
              <div className="form-group col-6">
                  <form >
                    <label>Choose day</label>
                    <select type="text" name="days" value={this.state.days} className="form-control" onChange={(e) => this.handleState(e)}>
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
              return <article className="user-recipe" key={idx}><img src={recipe.image} alt={recipe.label}/><button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e, recipe)}>Add Recipe</button></article> 
                })}        
          </div> 

        </Modal>


      </div >
    )
  }
}
