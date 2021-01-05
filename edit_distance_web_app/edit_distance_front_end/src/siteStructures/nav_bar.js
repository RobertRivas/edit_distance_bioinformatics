import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import {Container, Dropdown, NavLink} from "react-bootstrap";
import {NavItem} from "react-bootstrap";

const Styles = styled.div`
.navbar {

    background-color: #0202026e !important;
    color: white;
    
}

a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      
    }
  }
  
.dropdown-menu{

background-color: #0202026e !important;
    color: white;
    top: 48px;
}


`;


class NavBar extends Component{
  render()
  {
    return (
        <Styles>



        <Navbar expand="lg">

      {/*place brand here*/}
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/soft-dev">Software Development</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/web-dev">Web Development</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav>
         <Dropdown as={NavItem}  >
               <Dropdown.Toggle as={NavLink} >More</Dropdown.Toggle>

               <Dropdown.Menu className={"dropdown-menu"} >
                 <Dropdown.Item href="/mixing-mastering">Mixing and Mastering</Dropdown.Item>
                 <Dropdown.Item href="/music-production">Music production</Dropdown.Item>
                 <Dropdown.Item href="/digital-marketing">Digital Marketing</Dropdown.Item>

               </Dropdown.Menu>
 </Dropdown>
 </Nav>

          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
            </Styles>

//   <Styles>
//       <Container>
//         <Navbar collapseOnSelect expand="true" className={"navbar-override"} variant={""}>
//   <Navbar.Brand href="/">Home</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav>
//       <Nav.Link href="/soft-dev">Software Development</Nav.Link>
//       <Nav.Link href="/web-dev">Web Development</Nav.Link>
//
//         </Nav>
//       <Nav>
//         <Dropdown as={NavItem}  >
//               <Dropdown.Toggle as={NavLink} >More</Dropdown.Toggle>
//
//               <Dropdown.Menu className={"dropdown-override"} >
//                 <Dropdown.Item href="/mixing-mastering">Mixing and Mastering</Dropdown.Item>
//                 <Dropdown.Item href="/music-production">Music production</Dropdown.Item>
//                 <Dropdown.Item href="/digital-marketing">Digital Marketing</Dropdown.Item>
//
//               </Dropdown.Menu>
// </Dropdown>
// </Nav>
//     <Nav className={"nav-override"}>
//       <Nav.Link href="/about">About</Nav.Link>
//       <Nav.Link eventKey={2} href="/contact">
//         Contact
//       </Nav.Link>
//
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
// </Container>
//     </Styles>
//
    );
  }
}

export default NavBar;