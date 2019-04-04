import React from 'react';
import { Link } from 'react-router-dom';
import { MDBMask, MDBView, MDBCol, MDBRow } from 'mdbreact';
import logo from '../../../images/LOGO-white.png'
import background from '../../../images/background-recipe-01-flipped.jpg'
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
            <MDBRow>
            <MDBCol md="8"></MDBCol>
              <MDBCol md="3">
                <h2 className="text-center title-section mb-4">RECIPES</h2>
                <br />
                <p  className="font-weight-normal p-2 pb-4">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to={"/recipes"} className="btn btn-outline-light btn-account btn-rounded m-5  btn-filled"><i className="fas fa-home mr-2"></i> Recipes</Link>
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