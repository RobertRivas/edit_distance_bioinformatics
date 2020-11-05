import React, {Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/nav';

import NavDropdown from 'react-bootstrap/NavDropdown';




class NavBar extends Component{
  render()
  {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Robert Rivas Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#software-development">Software Development</Nav.Link>
      <Nav.Link href="#web-dev">Web Development</Nav.Link>
      <NavDropdown title="more" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#mixing-and-mastering">Mixing and Mastering</NavDropdown.Item>
        <NavDropdown.Item href="#music-production">Music production</NavDropdown.Item>
        <NavDropdown.Item href="#digital-marketing">Digital Marketing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#sports">Sports</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link eventKey={2} href="#Contact">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    );
  }
}

export default NavBar;