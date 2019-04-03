import React, { Component } from 'react'
import ProfileService from "../../service/profile-service";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import './EditProfileForm.css'

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
      <div className="edit-profile">
        <form onSubmit={this.handleSubmit}>
        <MDBRow className="wrapper-inside">
          <MDBCol md="3">
              <MDBInput label="Username"            icon="user"                       group type="text"     validate error="wrong" success="right" name="username" value={edit.username} onChange={e => this.handleChange(e)} />
              <MDBInput label="Password"            icon="lock"                       group type="password" validate error="wrong" success="right" name="password" onChange={e => this.handleChange(e)} />
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
              <MDBInput label="Index waist/height"  icon="heartbeat"                  group type="number"   validate error="wrong" success="right" name="indexWH"     value={user.indexWH} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="Body fat"            icon="walking"                    group type="number"   validate error="wrong" success="right" name="bodyFat"     value={user.bodyFat} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="Body musscle"        icon="walking"                    group type="number"   validate error="wrong" success="right" name="bodyMusscle" value={user.bodyMusscle} onChange={e => this.handleChange(e)} disabled="disabled" />
              <MDBInput label="TMB"                 icon="fire-alt"                   group type="number"   validate error="wrong" success="right" name="tmb"         value={user.tmb} onChange={e => this.handleChange(e)} disabled="disabled" />             
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
