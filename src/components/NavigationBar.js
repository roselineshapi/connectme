import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    // color: #9FFFCB;
    color: #eb7b26
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    // color: #9FFFCB;
    color:#eb7b26;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">ConnectMe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/externships">Externships</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/resources">Resources</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/contactForm">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)