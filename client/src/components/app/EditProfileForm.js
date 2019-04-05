import React, { Component } from 'react'
import ProfileService from "../../service/profile-service";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import './EditProfileForm.css'

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class EditProfileForm extends Component {

  constructor(props) {
    super(props)
    this.props = props

    this.state = {
      edit: {
        username: props.user.username,   height: props.user.height,       weight: props.user.weight,
        age: props.user.age,        waist: props.user.waist,        hip: props.user.hip,      neck: props.user.neck,
        bodyFat: props.user.bodyFat,  bodyMusscle: props.user.bodyMusscle,
        tmb: props.user.tmb,        trainingDays: props.user.trainingDays, indexWH: props.user.indexWH,
        activityLevel: props.user.activityLevel,  goal: props.user.goal,     weightGoal: props.user.weightGoal
      },
      loggedInUser: null
    }
    this.indexWH =  this.props.user.indexWH;
    this.bodyFat = this.props.user.bodyFat;
    this.tmb = this.props.user.tmb;
    this.bodyMusscle = this.props.user.bodyMusscle;

    this.services = new ProfileService()
   
}

  //FORMULAS

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


  handleChange = e => {
    const { name, value } = e.target;

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

    console.log(name, value)
    this.setState({ edit: { ...this.state.edit, [name]: value } })
    console.log(this.state.edit)
  }
  
  handleSubmit = e => {
    // const { name, value } = e.target;
    
    e.preventDefault()
 
    this.services.updateProfile(this.props.user._id, this.state.edit)
    .then(user => this.props.checkIfLogged() )
    //     .then(x => this.props.refreshCoasters())
  }
        // .then(x => this.setState({
        //   edit: {
        //     ...this.state.edit,
        //     [name]: value
        //   }
        // }, ()=>console.log(this.state.edit)))
    
 
// }

  render() {
    const { classes } = this.props;
    const {user} = this.props
    const {edit} = this.state
    console.log(this.state.edit.weight)
 
    return (
      <div className="edit-profile z-depth-1 rounded">
      <MDBContainer>
        <form onSubmit={this.handleSubmit}>
        <MDBRow className="wrapper-inside">
            <MDBCol md="3">
              <MDBInput label="Username"            icon="user"                       group type="text"     validate error="wrong" success="right" name="username" value={edit.username} onChange={e => this.handleChange(e)} />
              <br/><button className="btn btn-outline-light btn-account btn-rounded" type="submit">Edit</button>           
            </MDBCol>
            <MDBCol md="2">
              <MDBInput label="Age"                 icon="user"                       group type="number"   validate error="wrong" success="right" name="age"         value={edit.age} onChange={e => this.handleChange(e)} />
              <MDBInput label="Waist"               icon="street-view"                group type="number"   validate error="wrong" success="right" name="waist"       value={edit.waist} onChange={e => this.handleChange(e)} />
              <MDBInput label="Height"              icon="male"                       group type="number"   validate error="wrong" success="right" name="height"      value={edit.height} onChange={e => this.handleChange(e)} />
            </MDBCol>
            <MDBCol md="2">
              <MDBInput label="Weight"              icon="weight-hanging venus-mars"  group type="number"   validate error="wrong" success="right" name="weight"      value={edit.weight} onChange={e => this.handleChange(e)} />
              <MDBInput label="Hip"                 icon="street-view"                group type="number"   validate error="wrong" success="right" name="hip"         value={edit.hip} onChange={e => this.handleChange(e)} />
              <MDBInput label="Neck"                icon="user-minus"                 group type="number"   validate error="wrong" success="right" name="neck"        value={edit.neck} onChange={e => this.handleChange(e)} />
            </MDBCol>
            <MDBCol md="2">
              <MDBInput label="Index waist/height"  icon="heartbeat"                  group type="number"   validate error="wrong" success="right" name="indexWH"     value={this.indexWH} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="Body fat"            icon="walking"                    group type="number"   validate error="wrong" success="right" name="bodyFat"     value={this.bodyFat} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="Body musscle"        icon="walking"                    group type="number"   validate error="wrong" success="right" name="bodyMusscle" value={this.bodyMusscle} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="TMB"                 icon="fire-alt"                   group type="number"   validate error="wrong" success="right" name="tmb"         value={this.tmb} onChange={e => this.handleChange(e)} disabled="disabled" />             
            </MDBCol>
            <MDBCol md="2">
                    <div className="form-group">
                    <label>Training days</label>
                    <select type="text" name="trainingDays" className="form-control" onChange={e => this.handleChange(e)}>
                            <option>{user.trainingDays}</option>
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
                            <option>{user.activityLevel}</option>
                            <option>sedentary</option>
                            <option>moderate</option>
                            <option>active</option>
                            <option>very active</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Goal</label>
                        <select type="text" name="goal" className="form-control" onChange={e => this.handleChange(e)} >
                            <option >{user.goal}</option>
                            <option >lose weight</option>
                            <option >maintain</option>
                            <option >build muscle</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Weight goal</label>
                        <input type="text" name="weightGoal" className="form-control" value={user.weightGoal} onChange={e => this.handleChange(e)} />
                    </div>
            </MDBCol>
        </MDBRow>

        </form>  
      </MDBContainer>
      </div>
    )
  }
}

EditProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfileForm); 