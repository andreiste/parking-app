import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <NavbarBrand tag={Link} to="/">Parking App</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Button outline color="primary"><Link to="/map">Hartă</Link></Button>
        <NavLink href="https://github.com/andreiste/parking-app">@GitHub</NavLink>
        <Nav className="ml-auto" navbar>
          <NavbarText>Autor: Andrei Stefan</NavbarText>
        </Nav>
      </Collapse>
    </Navbar>
  }
}