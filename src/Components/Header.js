import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="/">My Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav'>Products</Link>
            <Link to="about" className='nav'>About</Link>
            <Link to="contact" className='nav'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;