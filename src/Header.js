import React, { Component } from 'react'
import { Navbar, Nav,NavDropdown} from 'react-bootstrap';


export default class Header extends Component {

  render() {
    return <div>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Recruiter.com</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" inline>
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item  href="#action/3.1">Account</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Subscription</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#home">Dashboard</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>

    </div>
  }
}