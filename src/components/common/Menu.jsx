import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("usuarioGym");
    setUsuarioLogueado({});
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" className="">
        <Container>
          <Navbar.Brand href="/" className="text-yellow">
            SR GYM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center w-100">
              <div>

              </div>
              <Link to="/" className="ms-4 mt-2 LinkMenu">
                Inicio
              </Link>
              <Link to="/gym" className="ms-4 mt-2 LinkMenu">
                Gimnasio
              </Link>
              <Link to="/planes" className="ms-4 mt-2 LinkMenu">
                Planes
              </Link>
              {usuarioLogueado.email ? (
                <>
                  <Link to="/cliente" className="ms-4 mt-2 LinkMenu">
                    Espacio del Cliente
                  </Link>
                  <Button variant={"warning"} className="ms-5" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                <div className=" w-75 d-flex justify-content-end">
                  <Button
                    as={Link}
                    to="/login"
                    variant={"warning"}
                    className=" mx-3"
                  >
                    Login
                  </Button>
                  <Button as={Link} to="/registro" variant={"warning"}>
                    Registrarse
                  </Button>
                </div>
                </>
              )}

             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
