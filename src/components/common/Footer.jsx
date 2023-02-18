import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark mt-5">
      <div className=" py-4 mt-5 container ">
        <div className="text-light">
          <h2 className="ColorYellow text-center display-4">SR GYM</h2>
        </div>
        <div className="row   container mt-5 pb-5">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="text-light text-center">
              <h5 className="ColorYellow">SR GYM </h5>
              <div className="d-flex flex-column">
              <Link className="LinksFooter">¿Quines somos ?</Link>
              <Link className="LinksFooter">Contactanos</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="text-light text-center">
              <h5 className="ColorYellow">Planes</h5>
              <div className="d-flex flex-column">
              <Link className="LinksFooter">Smart | Black</Link>
              <Link className="LinksFooter">mas ofertas</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="text-light text-center">
              <h5 className="ColorYellow">Siguenos</h5>
              <div className="d-flex flex-column">
              <Link className="LinksFooter">Facebook</Link>
              <Link className="LinksFooter">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
