import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Stepper from "./Stepper"


class PageThree extends Component {
  constructor(props) {
    super(props);

    this.service = new AuthService();
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.props.updateState(name, value)
  };

  render() {

    return (
        <MDBContainer className="wrapper p-2">
            <h2 className="text-center">Create Account</h2>
            <h3 class="font-weight-bold pl-0 my-4 text-center"><strong>Personal Data</strong></h3>
            <MDBRow className="wrapper-inside">
                <MDBCol md="8">   
                    <Stepper />  
                    <form > 
                    <div className="form-group">
                    <label>Training days</label>
                    <select type="text" name="trainingDays" className="form-control" onChange={e => this.handleChange(e)}>
                            <option> </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Activity level</label>
                        <select type="text" name="activityLevel" className="form-control" onChange={e => this.handleChange(e)} >
                            <option> </option>
                            <option>sedentary</option>
                            <option>moderate</option>
                            <option>active</option>
                            <option>very active</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Goal</label>
                        <select type="text" name="goal" className="form-control" onChange={e => this.handleChange(e)} >
                            <option > </option>
                            <option >lose weight</option>
                            <option >maintain</option>
                            <option >build muscle</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Weight goal</label>
                        <input type="text" name="weightGoal" className="form-control" onChange={e => this.handleChange(e)} />
                    </div>
                    <button className="btn btn-outline-dark btn-account" onClick={this.props.handleFormSubmit}>Continue</button>
                    </form>
                </MDBCol>
            </MDBRow>
  
        </MDBContainer>
      
    );
  }
}

export default PageThree;

