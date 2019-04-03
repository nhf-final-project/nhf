import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import Stepper from "./Stepper"
import './PageTwo.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


class PageTwo extends Component {
  constructor(props) {
    super(props);
    this.indexWH = '';
    this.bodyFat = '';
    this.tmb = '';
    this.bodyMusscle = '';
    this.service = new AuthService();
  }

  bodyFatGender = (waist, hip, neck, height, value) => {
    if (value === "male") { this.bodyFatMale(waist, neck, height) } else
    if (value === "female") { this.bodyFatFemale(waist, hip, neck, height) }
  }

  bodyFatMale = (waist, neck, height) => 
  this.bodyFat = parseFloat(495 / (1.0324 - (0.19077 * Math.log10(waist - neck)) + 0.15456 * (Math.log10(height))) - 450).toFixed(2)

  bodyFatFemale = (waist, hip, neck, height) => 
  this.bodyFat = parseFloat(495 / (1.29579 - (0.35004 * Math.log10(waist + hip - neck)) + 0.22100 * (Math.log10(height))) - 450).toFixed(2)

  tmbCalculator = (weight, height,  age, number)  => 
  this.tmb = (10 * weight) + (6.25 * height) - (5 * age) + number
  
  tmbGender = (gender, weight, height,  age) => {
    if (gender === "male") {
      this.tmbCalculator(weight, height, age, 5)
    } else if (gender === "female") {
      this.tmbCalculator(weight, height, age, -161)
    } 
  }
  

  handleChange = event => {
    const { name, value } = event.target;

    // -------------------------------------------------------------
    // ----- indexWH 
    // -------------------------------------------------------------

    if(name === "waist" && this.props.user.height){ this.indexWH = parseFloat(value / this.props.user.height).toFixed(2) }
    else if(name === "height" && this.props.user.waist) { this.indexWH = parseFloat(this.props.user.waist / value).toFixed(2) }
    this.props.user.indexWH = this.indexWH;

    // -------------------------------------------------------------
    // ----- bodyfat 
    // -------------------------------------------------------------

    if (name === "gender" && this.props.user.waist && this.props.user.neck && this.props.user.hip && this.props.user.height) {
      this.bodyFatGender (this.props.user.waist, this.props.user.hip, this.props.user.neck, this.props.user.height, value)
    } else
    if (this.props.user.gender && name === "waist" && this.props.user.neck && this.props.user.hip && this.props.user.height) {
      this.bodyFatGender (value, this.props.user.hip, this.props.user.neck, this.props.user.height, this.props.user.gender)
    } else
    if (this.props.user.gender && this.props.user.waist && name === "neck" && this.props.user.hip && this.props.user.height) {
      this.bodyFatGender (this.props.user.waist, this.props.user.hip, value, this.props.user.height, this.props.user.gender)
    } else
    if (this.props.user.gender && this.props.user.waist && this.props.user.neck && name === "hip" && this.props.user.height) {
      this.bodyFatGender (this.props.user.waist, value, this.props.user.neck, this.props.user.height, this.props.user.gender)
    } else
    if (this.props.user.gender && this.props.user.waist && this.props.user.neck && this.props.user.hip && name === "height") {
      this.bodyFatGender (this.props.user.waist, this.props.user.hip, this.props.user.neck, value, this.props.user.gender)
    }

    this.props.user.bodyFat = this.bodyFat

    // -------------------------------------------------------------
    // ----- bodyMusscle 
    // -------------------------------------------------------------
    
    this.bodyMusscle = parseFloat(this.props.user.weight - (this.props.user.weight * (this.bodyFat / 100))).toFixed(2)

    this.props.user.bodyMusscle = this.bodyMusscle;

    // -------------------------------------------------------------
    // ----- tmb 
    // -------------------------------------------------------------

    if (name === "gender" && this.props.user.weight && this.props.user.height && this.props.user.age) { 
      this.tmbGender(value, this.props.user.weight, this.props.user.height, this.props.user.age)
    } else
    if (this.props.user.gender && name === "weight" && this.props.user.height && this.props.user.age) {
      this.tmbGender(this.props.user.gender, value, this.props.user.height, this.props.user.age) 
    } else
    if (this.props.user.gender && this.props.user.weight && name === "height" && this.props.user.age) {
      this.tmbGender(this.props.user.gender, this.props.user.weight, value, this.props.user.age)
    } else
    if (this.props.user.gender && this.props.user.weight && this.props.user.height && name === "age") {
      this.tmbGender(this.props.user.gender, this.props.user.weight, this.props.user.height, value)
    }

    this.props.user.tmb = this.tmb


    this.props.updateState(name, value)
  };

  render() {
    return (
      <MDBContainer className="wrapper p-2">
        <h2 className="text-center">Create Account</h2>
        <h3 className="font-weight-bold pl-0 my-4 text-center"><strong>Personal Data</strong></h3>
        <MDBRow className="wrapper-inside">
          <MDBCol md="8">   
            <Stepper />       
            <form className="scroll">
              <label>Gender</label>
              <select type="text" name="gender" className="browser-default custom-select form-control select-wrapper" onChange={e => this.handleChange(e)} >
                <option> </option>
                <option>male</option>
                <option>female</option>
              </select>
              <MDBInput label="Age"                 icon="user"       group type="number" validate error="wrong" success="right" name="age"         required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Weight"              icon="weight-hanging venus-mars" group type="number" validate error="wrong" success="right" name="weight"      required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Waist"               icon="street-view"       group type="number" validate error="wrong" success="right" name="waist"       required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Height"              icon="male"       group type="number" validate error="wrong" success="right" name="height"      required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Index waist/height"  icon="heartbeat"       group type="number" validate error="wrong" success="right" name="indexWH"     value={this.indexWH} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="Hip"                 icon="street-view"       group type="number" validate error="wrong" success="right" name="hip"         required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Neck"                icon="user-minus"       group type="number" validate error="wrong" success="right" name="neck"        required="required" onChange={e => this.handleChange(e)} />
              <MDBInput label="Body fat"            icon="walking"       group type="number" validate error="wrong" success="right" name="bodyFat"     value={this.bodyFat} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="Body musscle"        icon="walking"       group type="number" validate error="wrong" success="right" name="bodyMusscle" value={this.bodyMusscle} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="TMB"                 icon="fire-alt"       group type="number" validate error="wrong" success="right" name="tmb"         value={this.tmb} onChange={e => this.handleChange(e)} disabled="disabled" /> 
            </form>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default PageTwo;