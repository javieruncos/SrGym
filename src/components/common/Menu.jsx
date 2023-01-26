import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home" className="text-warning">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/"} className="ms-4 LinkMenu">Home</Link>
              <Link to={"/"} className="ms-4 LinkMenu">Home</Link>
              <Link to={"/"} className="ms-4 LinkMenu">Home</Link>
              <Link to={"/"} className="ms-4 LinkMenu">Home</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
