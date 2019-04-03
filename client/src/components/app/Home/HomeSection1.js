import React from 'react';
import { Link } from 'react-router-dom';
import { MDBMask, MDBView, MDBCol, MDBRow } from 'mdbreact';
import logo from '../../../images/LOGO-white.png'

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
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white">
            <MDBRow>
            <MDBCol md="3"></MDBCol>
              <MDBCol md="6">
                <h1 className="text-center"><img src={logo} alt="" style={{width:2953/5, height:1181/5}} /></h1>
                <h2 className="text-center">Nutrition - Health - Fitness</h2>
                <br />
                <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <Link to={"/signup"} className="btn btn-outline-light btn-account btn-rounded m-5"><i className="fas fa-home mr-2"></i> Signup</Link>
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