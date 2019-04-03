import React, { Component } from "react";
import AuthService from "../../service/auth-service";
import './Signup2.css'
import { Link, Redirect } from 'react-router-dom';


import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from 'mdbreact';


import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';


class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",   email: "",        password: "", gender: "",        height: "",   weight: "",
        age: "",        waist: "",        hip: "",      neck: "",          bodyFat: "",  bodyMusscle: "",
        tmb: "",        trainingDays: "", indexWH: "",  activityLevel: "", goal: "",     weightGoal: ""
      },
      logged: false,
      error: '',
      formActivePanel1: 1,
      formActivePanel1Changed: false,
    };
    this.service = new AuthService();
  }

  updateState = (name, value) => this.setState({ user:{ ...this.state.user, [name]: value,  } })

  handleSelect = (selectedIndex, e) => this.setState({carousel: {...this.state.carousel, index: selectedIndex,direction: e.direction} })

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, gender, height, weight, age, waist, hip, neck,
            bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal } = this.state.user;
   
    this.service
      .signup(  username, email, password, gender, height, weight, age, waist, hip, neck,
        bodyFat, bodyMusscle,tmb, trainingDays, indexWH, activityLevel, goal, weightGoal  )
      .then(response => {
        this.setState({ ...this.state, 
            user: {
              username: "",   email: "",        password: "", gender: "",         height: "",   weight: "",
              age: "",        waist: "",        hip: "",      neck: "",           bodyFat: "",  bodyMusscle: "",
              tmb: "",        trainingDays: "", indexWH: "",  activityLevel: "",  goal: "",     weightGoal: "",
            },
            logged: true
        }, () => this.props.setUser(response));
      })
      .catch(error => {
        console.log(error)
 
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ user:{ ...this.state.user, [name]: value } });
  };

  swapFormActive = (a) => (param) => (e) => {
    this.setState({
      ['formActivePanel' + a]: param,
      ['formActivePanel' + a + 'Changed']: true
    });
  }

  render() {
    console.log(this.state.logged)
    if(this.state.logged) return <Redirect to={"/profile"}/>
    return (
      
      <MDBCarousel interval={false} multiItem={false} activeItem={1} length={3} showControls={false} showIndicators={true} className="z-depth-1 signup">
        <MDBCarouselInner>
        {this.state.formActivePanel1 === 1 &&
          (
          <MDBCarouselItem itemId="1" id="step-1">
            <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
              <MDBMask overlay="black-light" className="flex-center flex-column text-white">
                <PageOne updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} error={this.state.error} />
                <Link to={"/"} className="btn btn-outline-light btn-account btn-rounded m-5"><i className="fas fa-home mr-2"></i> Home</Link>
              </MDBMask>
            </MDBView> 
          </MDBCarouselItem>
          )}
          <MDBCarouselItem itemId="2" id="step-2">
            <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
              <MDBMask overlay="black-light" className="flex-center flex-column text-white">
                <PageTwo updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} user={this.state.user} />
                <Link to={"/"} className="btn btn-outline-light btn-account btn-rounded m-5"><i className="fas fa-home mr-2"></i> Home</Link>
              </MDBMask>            
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" id="step-3">
            <MDBView  src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
              <MDBMask overlay="black-light" className="flex-center flex-column text-white">
                <PageThree updateState={this.updateState} handleFormSubmit={this.handleFormSubmit} user={this.state.user} />
                <Link to={"/"} className="btn btn-outline-light btn-account btn-rounded m-5"><i className="fas fa-home mr-2"></i> Home</Link>                
              </MDBMask>            
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
  }
}

export default CarouselPage;