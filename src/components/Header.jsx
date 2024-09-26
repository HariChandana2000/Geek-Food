import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <Navbar
      bg='dark'
      data-bs-theme='dark'
      expand='md'
      sticky='top'
      collapseOnSelect
    >
      <Container className='custom-nav-container '>
        <LinkContainer to='/'>
          <Navbar.Brand className='custom-nav-brand'>
            <img src={logo} alt='Geek Food' />{" "}
            <span className='nav-title'>GeekFoods</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto'>
            <LinkContainer to='/'>
              <Nav.Link className='nav-link'>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/quote'>
              <Nav.Link className='nav-link'>Quote</Nav.Link>
            </LinkContainer>
            <Nav.Link className='nav-link'>Resturants</Nav.Link>
            <Nav.Link className='nav-link'>Foods</Nav.Link>
            <Nav.Link className='nav-link'>Contact</Nav.Link>
          </Nav>
          <Nav.Link>
            <Button variant='primary'>Get Started</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
