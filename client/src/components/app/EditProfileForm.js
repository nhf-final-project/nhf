import React, { Component } from 'react'
import ProfileService from "../../service/profile-service";

export default class EditProfileForm extends Component {

  constructor(props) {
    super(props)
    this.props = props

    this.state = {
      edit: {
        username: props.user.username,   height: props.user.height,       weight: props.user.weight,
        age: props.user.age,        waist: props.user.waist,        hip: props.user.hip,      neck: props.user.neck,           bodyFat: props.user.bodyFat,  bodyMusscle: props.user.bodyMusscle,
        tmb: props.user.tmb,        trainingDays: props.user.trainingDays, indexWH: props.user.indexWH,  activityLevel: props.user.activityLevel,  goal: props.user.goal,     weightGoal: props.user.weightGoal
      }
    }

    this.services = new ProfileService()
   
}


  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value)
    this.setState({
        edit: {
            ...this.state.edit, 
            [name]: value
        }
    })
  }



  handleSubmit = e => {

    e.preventDefault()

    this.services.updateProfile(this.props.user._id, this.state.edit)
    //     .then(x => this.props.refreshCoasters())

    // this.setState({
    //   edit: {
    //     username: "",   height: "",       weight: "",
    //     age: "",        waist: "",        hip: "",      neck: "",           bodyFat: "",  bodyMusscle: "",
    //     tmb: "",        trainingDays: "", indexWH: "",  activityLevel: "",  goal: "",     weightGoal: ""
    //   }
    // })
 
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
                <input type="text" name="username" placeholder={user.username} className="form-control" value={edit.username} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Height</label>
                <input type="number" name="height" placeholder={user.height} className="form-control" value={edit.height} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Weight</label>
                <input type="number" name="weight" placeholder={user.weight} className="form-control" value={edit.weight} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Age</label>
                <input type="number" name="age" placeholder={user.age} className="form-control" value={edit.age} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Waist</label>
                <input type="number" name="waist" placeholder={user.waist} className="form-control" value={edit.waist} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Hip</label>
                <input type="number" name="hip" placeholder={user.hip} className="form-control" value={edit.hip} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Neck</label>
                <input type="number" name="neck" placeholder={user.neck} className="form-control" value={edit.neck} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group col-12">
                <label>Body fat</label>
                <input type="number" name="bodyFat" className="form-control" placeholder={user.bodyFat} value={this.bodyFat} onChange={e => this.handleChange(e)} disabled="disabled" />
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

            <button type="submit" >Edit</button>
            </form>  
      </div>
    )
  }
}
