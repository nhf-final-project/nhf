import React from 'react';
import {  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, 
          MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { Link } from 'react-router-dom';
import './NavbarPage.css'
import image from '../../../images/LOGO-white.png'

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() { this.setState({ collapse: !this.state.collapse, }); }

  render() {
    return (
      <header>
        {/* className="nav-height" */}
        <MDBNavbar color="elegant-color" fixed="top" dark expand="md" scrolling transparent scrollingNavbarOffset={200}>
          <MDBNavbarBrand>
            <Link to={"/"}><img src={image} height="30" alt="logo" /></Link>
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar className="prueba">
            <MDBNavbarNav left>
              <MDBNavItem><MDBNavLink to="#!">Food</MDBNavLink></MDBNavItem>
              <MDBNavItem><MDBNavLink to="/recipes">Recipes</MDBNavLink></MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret><div className="d-none d-md-inline">MDBDropdown</div></MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem><MDBNavLink to="/login">Login</MDBNavLink></MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle className="dopdown-toggle" nav caret>
                    <img src="https:mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                      style={{ height: "35px", padding: 0, border: "2px solid #f5f5f5"  }} alt="" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color="peach-gradient" className="dropdown-default" right>
                    <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default NavbarPage;