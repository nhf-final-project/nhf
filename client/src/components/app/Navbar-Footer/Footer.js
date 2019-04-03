import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer'
import { Link } from 'react-router-dom';
import image from '../../../images/LOGO-white.png'

const FooterPage = () => {
  return (
    <MDBFooter color="elegant-color" className="footer-bottom page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" className="text-center">
            <img src={image} height="30" alt="logo" />
            <p>Nutrition - Health - Fitness</p>
          </MDBCol>
          <MDBCol md="6" className="text-center">
            <h5 className="title">Links</h5>
            <p><Link to={"/recipes"}>Recipes</Link> | <Link to={"/food"}>Food</Link></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <Link to={"/"}><img src={image} height="30" alt="logo" /></Link>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;