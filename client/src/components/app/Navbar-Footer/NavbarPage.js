import React from 'react';
import {  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, 
          MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { Link } from 'react-router-dom';
import './NavbarPage.css'
import image from '../../../images/LOGO-white.png'
import AuthService from "../../../service/auth-service";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      loggedInUser: null,
    };
    this.onClick = this.onClick.bind(this);
    this.service = new AuthService()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  onClick() { this.setState({ collapse: !this.state.collapse, }); }

  logoutUser = () => {
    this.service.logout()
        .then(() => {
            this.setState({ ...this.state, loggedInUser: null });
            this.props.setUser(null);
        })
  }

  render() {
    return (
      <header>
        <MDBNavbar color="elegant-color" fixed="top" dark expand="md" scrolling transparent scrollingNavbarOffset={200}>
          <MDBNavbarBrand>
            <Link to={"/"}><img src={image} height="30" alt="logo" /></Link>
          </MDBNavbarBrand>
          {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
          <MDBCollapse isOpen={this.state.collapse} navbar className="prueba">
            <MDBNavbarNav left>
              <MDBNavItem><MDBNavLink to="/recipes">Recipes</MDBNavLink></MDBNavItem>
              {/* <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret><div className="d-none d-md-inline">MDBDropdown</div></MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem> */}
            </MDBNavbarNav>
            <MDBNavbarNav right>
            { !this.state.loggedInUser ? <MDBNavItem><MDBNavLink to="/login">Login</MDBNavLink></MDBNavItem> : null }
            { this.state.loggedInUser ?
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className="dopdown-toggle" nav caret>
                      <img src={this.state.loggedInUser.image} className="rounded-circle z-depth-0"
                        style={{ height: "35px", width: "35px", padding: 0, border: "2px solid #f5f5f5"  }} alt="" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="peach-gradient" className="dropdown-default" right>
                      <MDBDropdownItem>
                        <Link to={"/profile"}><i className="fas fa-user mr-2"></i> My Profile</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to={"/"}><a href="#" className="text-center" onClick={() => this.logoutUser()}><i className="fas fa-sign-out-alt"></i>  Log out</a></Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              : null
                }
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </header>
    );
  }
}

export default NavbarPage;