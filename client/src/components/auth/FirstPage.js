import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import { Link } from "react-router-dom";

class FirstPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };

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
        <div className="row wrapper-inside">
          <div className="col-sm-12">

            <form >
              <div className="form-group col-12">
                <label>Username</label>
                <input type="text" name="username" className="form-control" value={this.state.username} onChange={e => this.handleChange(e)} />
              </div>

              <div className="form-group col-12">
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={this.state.email} onChange={e => this.handleChange(e)} />
              </div>

              <div className="form-group col-12">
                <label>Password</label>
                <input type="password" name="password" className="form-control" value={this.state.password} onChange={e => this.handleChange(e)} />
              </div>
            </form>

            <small>
              Already have an account? <Link to={"/"}> Login </Link>
            </small>
          </div>
        </div>
  
      </div>
      
    );
  }
}

export default FirstPage;
