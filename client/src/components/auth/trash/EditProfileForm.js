import React, { Component } from 'react'
import ProfileService from "../../../service/profile-service";

export default class EditProfileForm extends Component {

  constructor(props) {
    super(props)
    this.props = props

    this.state = {
      edit: {
        username: props.user.username,   height: props.user.height,       weight: props.user.weight,
        age: props.user.age,        waist: props.user.waist,        hip: props.user.hip,      neck: props.user.neck,           bodyFat: props.user.bodyFat,  bodyMusscle: props.user.bodyMusscle,
        tmb: props.user.tmb,        trainingDays: props.user.trainingDays, indexWH: props.user.indexWH,  activityLevel: props.user.activityLevel,  goal: props.user.goal,     weightGoal: props.user.weightGoal
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
    this.setState({
        edit: {
            ...this.state.edit, 
            [name]: value
        }
    })
    console.log(this.state.edit)
  }



  handleSubmit = e => {

    e.preventDefault()

    this.services.updateProfile(this.props.user._id, this.state.edit)
    .then(user => this.props.checkIfLogged() )
    //     .then(x => this.props.refreshCoasters())
    
 
    }




  render() {
    const {user} = this.props
    const {edit} = this.state
 
    return (
      <div>
        <h2>Edit profile</h2>
         
            <form onSubmit={this.handleSubmit}>
            <div className="form-group col-12">
                <label>Username</label>
                <input type="text" name="username" className="form-control" value={edit.username} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Height</label>
                <input type="number" name="height" className="form-control" value={edit.height} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Weight</label>
                <input type="number" name="weight" className="form-control" value={edit.weight} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Age</label>
                <input type="number" name="age" className="form-control" value={edit.age} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Waist</label>
                <input type="number" name="waist" className="form-control" value={edit.waist} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Hip</label>
                <input type="number" name="hip"  className="form-control" value={edit.hip} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Neck</label>
                <input type="number" name="neck" className="form-control" value={edit.neck} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Body fat</label>
                <input type="number" name="bodyFat" className="form-control" value={this.bodyFat} onChange={e => this.handleChange(e)} disabled="disabled" />
            </div>

            <div className="form-group col-12">
                <label>Body musscle</label>
                <input type="number" name="bodyMusscle" className="form-control" value={user.bodyMusscle} onChange={e => this.handleChange(e)} disabled="disabled" />
              </div>

              <div className="form-group col-12">
                <label>TMB</label>
                <input type="number" name="tmb" className="form-control" value={user.tmb} onChange={e => this.handleChange(e)} disabled="disabled" />
              </div>

            <div className="form-group col-6">
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
            <div className="form-group col-6">
                <label>Activity level</label>
                <select type="text" name="activityLevel" className="form-control" onChange={e => this.handleChange(e)} >
                    <option>{user.activityLevel}</option>
                    <option>sedentary</option>
                    <option>moderate</option>
                    <option>active</option>
                    <option>very active</option>
                </select>
              </div>
              <div className="form-group col-6">
                <label>Goal</label>
                <select type="text" name="goal" className="form-control" onChange={e => this.handleChange(e)} >
                    <option >{user.goal} </option>
                    <option >lose weight</option>
                    <option >maintain</option>
                    <option >build muscle</option>
                </select>
              </div>
            
            <input type="text" name="weightGoal" value={user.weightGoal} className="form-control" onChange={e => this.handleChange(e)}  />

            <button type="submit" >Send</button>
            </form>  
      </div>
    )
  }
}
