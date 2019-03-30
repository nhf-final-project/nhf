import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import AuthService from "../../service/auth-service";
import Carousel from "react-bootstrap/Carousel";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
        gender: "",
        height: "",
        weight: "",
        age: "",
        waist: "",
        hip: "",
        neck: "",
        bodyFat: "",
        bodyMusscle: "",
        tmb: "",
        trainingDays: "",
        indexWH: "",
        activityLevel: "",
        goal: "",
        weightGoal: ""
      },
      carousel: {
        index: 0,
        direction: null,
        controls: false,
        interval: null,
        keyboard: true,
      },
      
    };

    this.service = new AuthService();
  }

  updateState = (name, value) => {
    console.log(name, value)

    this.setState({ user:{ ...this.state.user, [name]: value,  } });
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({carousel: {...this.state.carousel, index: selectedIndex,direction: e.direction} });
  }

  handleFormSubmit = () => {
    // event.preventDefault();
    const { username, email, password, gender, height, weight, age, waist, hip, neck,
            bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } = this.state.user;
   
    this.service
      .signup(  username, email, password, gender, height, weight, age, waist, hip, neck,
        bodyFat, bodyMusscle,tmb, trainingDays, indexWH, activityLevel, goal, weightGoal  )
      .then(response => {
        this.setState({
            user: {
                username: "",
                email: "",
                password: "",
                gender: "",
                height: "",
                weight: "",
                age: "",
                waist: "",
                hip: "",
                neck: "",
                bodyFat: "",
                bodyMusscle: "",
                tmb: "",
                trainingDays: "",
                indexWH: "",
                activityLevel: "",
                goal: "",
                weightGoal: ""
              },
           
        }, () => this.props.setUser(response));
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ user:{ ...this.state.user, [name]: value } });
  };

  render() {

    return (
        <div className="container create-account">
            <Carousel
                activeIndex={this.state.carousel.index}
                onSelect={this.handleSelect}
                controls={this.state.carousel.controls}
                interval={this.state.carousel.interval}
                keyboard={this.state.carousel.keyboard}
            >
                <Carousel.Item>
                    <FirstPage updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} />
                </Carousel.Item>
                <Carousel.Item>
                    <SecondPage updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} user={this.state.user} />
                </Carousel.Item>
                <Carousel.Item>
                    <ThirdPage updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} user={this.state.user}/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }
}

export default Signup;
