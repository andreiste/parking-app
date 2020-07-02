import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavLink } from 'reactstrap';

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarBrand>Parking App</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <NavLink href="https://github.com/andreiste/parking-app">@GitHub</NavLink>
        <Nav className="ml-auto" navbar>
          <NavbarText>Autor: Andrei Stefan</NavbarText>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}