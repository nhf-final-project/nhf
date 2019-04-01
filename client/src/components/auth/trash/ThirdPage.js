import React, { Component } from "react";
import AuthService from "../../../service/auth-service";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


class ThirdPage extends Component {
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
      
      <div className="container wrapper">
            <h3>Create Account</h3>
        <div className="row">
          <div className="col-sm-12">
            <form > 
              <div className="form-group col-6">
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

              <div className="form-group col-6">
                <label>Activity level</label>
                <select type="text" name="activityLevel" className="form-control" onChange={e => this.handleChange(e)} >
                    <option> </option>
                    <option>sedentary</option>
                    <option>moderate</option>
                    <option>active</option>
                    <option>very active</option>
                </select>
              </div>

              <div className="form-group col-6">
                <label>Goal</label>
                <select type="text" name="goal" className="form-control" onChange={e => this.handleChange(e)} >
                    <option > </option>
                    <option >lose weight</option>
                    <option >maintain</option>
                    <option >build muscle</option>
                </select>
              </div>

              <div className="form-group col-6">
                <label>Weight goal</label>
                <input type="text" name="weightGoal" className="form-control" onChange={e => this.handleChange(e)} />
              </div>

              <button className="btn btn-outline-dark btn-account" onClick={this.props.handleFormSubmit}>Continue</button>
            </form>

            
          </div>
        </div>
  
      </div>
      
    );
  }
}

export default ThirdPage;
