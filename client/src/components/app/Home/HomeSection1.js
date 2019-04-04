import React from 'react';
import { Link } from 'react-router-dom';
import { MDBMask, MDBView, MDBCol, MDBRow } from 'mdbreact';
import logo from '../../../images/LOGO-white.png'
import background from '../../../images/background-home-05-edit.jpg'
import './HomeSection.css'

class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() { this.setState({ collapse: !this.state.collapse }) }

  render() {
    return (
        <section>
          <MDBView src={background}>
            <MDBMask overlay="black-light" className="flex-center flex-column text-white">
            <MDBRow className="top-class">
            <MDBCol md="1"></MDBCol>
              <MDBCol md="3">
                <h1 className="text-center"><img src={logo} className="logo" alt="logo" style={{width:2953/9, height:1181/9}} /></h1>
                <h4 className="text-center mb-5">Nutrition - Health - Fitness</h4>
                
                <p className="font-weight-normal px-2">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Link to={"/signup"} className="btn btn-outline-light btn-account btn-rounded m-5 btn-filled"><i className="fas fa-home mr-2"></i> Signup</Link>
              </MDBCol>
              <MDBCol md="3"></MDBCol>
              </MDBRow>
            </MDBMask>
          </MDBView>
        </section>
    );
  }
}

export default FullPageIntroWithFixedNavbar;