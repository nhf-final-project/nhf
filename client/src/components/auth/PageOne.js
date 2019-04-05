import React, { Component } from 'react';
import AuthService from "../../service/auth-service";

import { Link } from "react-router-dom";
import Stepper from "./Stepper"
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
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
        <h2 className="text-center text-white">Create Account</h2>
        <h3 className="font-weight-bold pl-0 my-4 text-center text-white"><strong>Basic Information</strong></h3>
        <MDBRow className="wrapper-inside">
          <MDBCol md="8">
            {/* <Stepper /> */}
            <form>
              <MDBInput label="Username" icon="user" group type="text" validate error="wrong" success="right" name="username" required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Email" icon="user" group type="text" validate error="wrong" success="right" name="email"  required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Password" icon="lock" group type="password" validate name="password" required="required" onChange={e => this.handleChange(e)} />
            </form>
            <h5 className="text-center m-3 font-weight-bold"><small>Already have an account? <Link to={"/login"} className="links"> Login </Link></small></h5>
            <p className="text-center m-3 error-msg">{this.props.error}</p>
          </MDBCol>  
        </MDBRow>
      </MDBContainer>
    )
  }
}