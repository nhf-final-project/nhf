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
      meal: '',
      day: '',
      calendarRecipes: []   
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

    const {name, value} = e.target
    this.setState({

    })
  }


  render() {
    const {user, recipes} = this.props
    console.log(user, recipes)

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
              {Object.keys(user.calendar.breakfast).map(day => (
                <td>{Object.values(user.calendar.breakfast[day]).map(recetas => (<div>hola</div>))}</td>
              ) )}
            </tr>
            <tr>
              <th scope="row">Lunch</th>
              {Object.keys(user.calendar.lunch).map(day => (
                <td>{Object.values(user.calendar.lunch[day]).map(recetas => (<div>hola</div>))}</td>
              ) )}
            </tr>
            <tr>
              <th scope="row">Snack</th>
              {Object.keys(user.calendar.snack).map(day => (
                <td>{Object.values(user.calendar.snack[day]).map(recetas => (<div>hola</div>))}</td>
              ) )}
            </tr>
            <tr>
              <th scope="row">Dinner</th>
              {Object.keys(user.calendar.dinner).map(day => (
                <td>{Object.values(user.calendar.dinner[day]).map(recetas => (<div>hola</div>))}</td>
              ) )}
            </tr>
          </tbody>
        </table>
        <div className="form-group col-6">
          <label>Plan your meal</label>
          <select type="text" name="meal" className="form-control" onChange={this.handleChange}>
            <option></option>
            <option value={this.state.meal}>Breakfast</option>
            <option value={this.state.meal}>Lunch</option>
            <option value={this.state.meal}>Snack</option>
            <option value={this.state.meal}>Dinner</option>
          </select>
        </div>


        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
        
          <div>
              <div className="form-group col-6">
                  <form onSubmit={this.handleSubmit}>
                    <label>Choose day</label>
                    <select type="text" name="blabla" className="form-control" onChange={this.openModal}>
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
              return <article className="user-recipe" key={idx}><img src={recipe.image} alt={recipe.label}/><button onClick={() => this.closeModal()} type="submit" className="btn btn-primary">Add</button></article> 
                })}        
          </div> 

        </Modal>


      </div >
    )
  }
}
