import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

 class NavbarComponents extends React.Component {
   
   renderLinks(){
     
      if (!sessionStorage.getItem('user')){
        return (
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Municom</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
          
                <NavItem>
                  <NavLink href="/signup">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )
        }
        else{
          return (
              
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/">Municom</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.doLogout} href="/">Logout</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          )
        }
      }


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.doLogout = this.doLogout.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        {this.renderLinks()}
      </div>
    );
  }
  doLogout(){
    sessionStorage.removeItem('user');
    this.props.logout();
  }
}
export default NavbarComponents;
