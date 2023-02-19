import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Menu.css";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("usuarioGym");
    setUsuarioLogueado({});
    navigate("/");
  };

  return (
    <div className="Menu">
      <Navbar bg="dark" expand="lg" >
        <Container>
          <Navbar.Brand href="/" className="text-yellow SrGym">
            SR GYM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-center w-100">
              <div className="w-100  d-flex justify-content-center menuLinks">
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
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="divLogin">
                {usuarioLogueado.email ? (
                  <>
                    <Button
                      variant={"warning"}
                      className="ms-5 btnLogout"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
