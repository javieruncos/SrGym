import React from "react";
import { Nav, Navbar, Container,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="/" className="text-yellow">SR GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/gym" className="ms-4 LinkMenu">Gimnasio</Link>
              <Link to="/cliente" className="ms-4 LinkMenu">Espacio del cliente</Link>
              <Link to="/" className="ms-4 LinkMenu">Planes</Link>
              <Link to="/" className="ms-4 LinkMenu">Sobre nosotros</Link>
            </Nav>
            <Button as={Link} variant={"warning"} className=" mx-2">Login</Button>
            <Button as={Link} variant={"warning"}>Registrarse</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
