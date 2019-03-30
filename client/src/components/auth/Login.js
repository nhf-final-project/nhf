import React, { Component } from 'react';
import AuthService from "../../service/auth-service";
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', logged: false };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.service.login(username, password)
             .then(response => {
                console.log(response)
                 this.setState({ email: "", password: "", logged: true }, ()=> this.props.setUser(response));
             })
             .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {

        if(this.state.logged) return <Redirect to={"/profile"}/>

        return (
            <div className="container create-account">
              <div className="container wrapper">
                <h1>Inicia sesión</h1>
                <div className="row ">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group col-12">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.username} onChange={e => this.handleChange(e)} />
                            </div>

                            <div className="form-group col-12">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </div>
                            <input type="submit" value="Login" className="btn btn-outline-dark" />
                        </form>

                        <small>¿No tienes una cuenta? <Link to={"/signup"}> Regístrate ahora</Link></small>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login;