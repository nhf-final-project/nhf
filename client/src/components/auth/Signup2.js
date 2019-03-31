import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import FormBG from '../../images/form-bg.jpeg'
import './Signup2.css'


import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBCardImage } from 'mdbreact';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Stepper from "./Stepper"


class CarouselPage extends Component {
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
      formBG: FormBG
    };

    this.service = new AuthService();
  }

  updateState = (name, value) => this.setState({ user:{ ...this.state.user, [name]: value,  } })

  handleSelect = (selectedIndex, e) => this.setState({carousel: {...this.state.carousel, index: selectedIndex,direction: e.direction} })

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
      <MDBCarousel interval={false} multiItem={false} activeItem={1} length={4} showControls={false} showIndicators={true} className="z-depth-1 signup">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" id="step-1">
            <MDBView>
              <PageOne updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} />
              {/* <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" /> */}
            </MDBView>
            
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" id="step-2">
            <MDBView>
              <PageTwo updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} user={this.state.user} />
              {/* <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" /> */}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" id="step-3">
            <MDBView>
              <PageThree updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} user={this.state.user} />
              {/* <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" /> */}
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
  }
}

export default CarouselPage;