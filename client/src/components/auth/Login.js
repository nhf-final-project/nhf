import React, { Component } from 'react';
import AuthService from "../../service/auth-service";
import { Link, Redirect } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBView, MDBMask } from 'mdbreact';
import './Login.css'
import background from './../../images/background-home-06-edit.jpg'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', logged: false, error: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
             .then(response => {
             
                 this.setState({ email: "", password: "", logged: true }, ()=> this.props.setUser(response));
             })
             .catch(error => {
                console.log(error)
                // this.setState({ error: error.response.data.message});
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        this.state.error = ''
    }

    render() {
        if(this.state.logged) return <Redirect to={"/profile"}/>
        return (
            <MDBView src={background}>
                <MDBMask overlay="black-light" className="flex-center flex-column text-white">
                <MDBContainer className="wrapper p-2 create-account">
                    <h2 className="text-center text-white">Login</h2>
                    <h3 className="font-weight-bold pl-0 my-4 text-center text-white"><strong>Personal Area</strong></h3>
                    <MDBRow className="wrapper-inside">
                        <MDBCol md="8">
                            <form onSubmit={this.handleFormSubmit}>
                            <MDBInput label="Username" icon="user" group type="text" validate error="wrong" success="right" name="username" required="required" onChange={e => this.handleChange(e)} />
                            <MDBInput label="Password" icon="lock" group type="password" validate name="password" required="required" onChange={e => this.handleChange(e)} />
                            <input type="submit" value="Login" className="btn btn-outline-light btn-account btn-rounded" />
                            </form>
                            <h5 className="text-center m-3 font-weight-bold"><small>Don't you have an account? <Link to={"/signup"} className="links"> Register now! </Link></small></h5>
                            <p className="text-center m-3 error-msg">{this.state.error}</p>
                        </MDBCol>  
                    </MDBRow>
                </MDBContainer>
              </MDBMask>
            </MDBView>
        )
    }
}

export default Login;