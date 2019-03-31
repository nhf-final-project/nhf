import React, { Component } from 'react';
import AuthService from "../../service/auth-service";
import { Link } from "react-router-dom";
import Stepper from "./Stepper"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import './PageOne.css'


export default class PageOne extends Component {
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
        <h3 class="font-weight-bold pl-0 my-4 text-center"><strong>Basic Information</strong></h3>
        <MDBRow className="wrapper-inside">
          <MDBCol md="8">
            <Stepper />
            <form>
              <MDBInput label="Username" icon="user" group type="text" validate error="wrong" success="right" name="username" required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Email" icon="envelope" group type="email" validate error="wrong" success="right" name="email" required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Password" icon="lock" group type="password" validate name="password" required="required" onChange={e => this.handleChange(e)} />
              <MDBBtn className="btn-rounded float-right" color="dark">Next</MDBBtn>
            </form>
            <small>Already have an account? <Link to={"/login"}> Login </Link></small>
          </MDBCol>  
        </MDBRow>
        
      </MDBContainer>
    )
  }
}