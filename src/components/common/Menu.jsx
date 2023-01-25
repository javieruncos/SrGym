import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="ms-4">Home</Nav.Link>
              <Nav.Link href="#link" className="ms-4">Link</Nav.Link>
              <Nav.Link href="#link" className="ms-4">Link</Nav.Link>
              <Nav.Link href="#link" className="ms-4">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
