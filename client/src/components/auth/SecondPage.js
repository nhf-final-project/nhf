import React, { Component } from "react";
import AuthService from "../../service/auth-service";

class SecondPage extends Component {
  constructor(props) {
    super(props);
    this.indexWH = 0;
    this.bodyFat = 0;
    this.tmb = 0;
    this.bodyMusscle = 0;
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
      
      <div className="container wrapper">
        <h3>Create Account</h3>
        <div className="row">
          <div className="col-sm-12">
            <form className="scroll">
              <div className="form-group col-12">
              <label>Gender</label>
                <select type="text" name="gender" className="form-control" onChange={e => this.handleChange(e)} >
                  <option> </option>
                  <option>male</option>
                  <option>female</option>
                </select>
              </div>
              <div className="form-group col-12">
                <label>Age</label>
                <input type="number" name="age" className="form-control" onChange={e => this.handleChange(e)} />
              </div>            
              <div className="form-group col-12">
                <label>Weight</label>
                <input type="number" name="weight" className="form-control" onChange={e => this.handleChange(e)} />
              </div>
              <div className="form-group col-12">
                <label>Waist</label>
                <input type="number" name="waist" className="form-control" onChange={e => this.handleChange(e)} />
              </div>
              <div className="form-group col-12">
                <label>Height</label>
                <input type="number" name="height" className="form-control" onChange={e => this.handleChange(e)} />
              </div>      
              <div className="form-group col-12">
                <label>Index waist/height</label>
                <input type="number" name="indexWH" className="form-control" value={this.indexWH} onChange={e => this.handleChange(e)} disabled="disabled"/>
              </div>
              <div className="form-group col-12">
                <label>Hip</label>
                <input type="number" name="hip" className="form-control" onChange={e => this.handleChange(e)} />
              </div>
              <div className="form-group col-12">
                <label>Neck</label>
                <input type="number" name="neck" className="form-control" onChange={e => this.handleChange(e)} />
              </div>
              <div className="form-group col-12">
                <label>Body fat</label>
                <input type="number" name="bodyFat" className="form-control" value={this.bodyFat} onChange={e => this.handleChange(e)} disabled="disabled" />
              </div>
              <div className="form-group col-12">
                <label>Body musscle</label>
                <input type="number" name="bodyMusscle" className="form-control" value={this.bodyMusscle} onChange={e => this.handleChange(e)} disabled="disabled" />
              </div>
              <div className="form-group col-12">
                <label>TMB</label>
                <input type="number" name="tmb" className="form-control" value={this.tmb} onChange={e => this.handleChange(e)} disabled="disabled" />
              </div>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;