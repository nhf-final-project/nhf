import React, { Component } from 'react'
import Modal from 'react-modal'
import PlanMeal from './PlanMeal';

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
      edit: {

      }

    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }








  render() {
    const {user} = this.props


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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">Lunch</th>
              <td colSpan="2">Larry the Bird</td>
              <td>Thornton</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">Snack</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">Dinner</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
        <div className="form-group col-6">
          <label>Plan your meal</label>
          <select type="text" name="trainingDays" className="form-control" onChange={this.openModal}>
            <option></option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Snack</option>
            <option>Dinner</option>
          </select>
        </div>

        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>

        <div className="form-group col-6">
          <label>Choose day</label>
          <select type="text" name="trainingDays" className="form-control" onChange={this.openModal}>
            <option></option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Snack</option>
            <option>Dinner</option>
          </select>
        </div>

          <PlanMeal user={user} closeModal={this.closeModal}/>
          {/* <button type="submit" className="btn btn-primary">Crear</button> */}

        </Modal>


      </div >
    )
  }
}
