import React, { Component } from 'react';
import AuthService from "../../service/auth-service";
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log("entro")
        this.service.login(email, password)
             .then(response => {
                 this.setState({ email: "", password: "" });
                 this.props.setUser(response)
                //window.location.assign('/coasters')
             })
             .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="container create-account">
              <div className="container wrapper">
                <h1>Inicia sesión</h1>
                <div className="row ">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group col-12">
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" value={this.state.email} onChange={e => this.handleChange(e)} />
                            </div>

                            <div className="form-group col-12">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </div>
                            <input type="submit" value="Signup" className="btn btn-outline-dark" />
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