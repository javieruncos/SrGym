import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Inferior.css";

const CategoriaInferior = () => {
  return (
    <section className="container text-light mt-5">
      <article>
        <div>
          <div>
            <div className="text-center">
              <h4 className="display-4 titulos"> Tren Inferior</h4>
            </div>
          </div>
        </div>
        <div className=" cards text-light mt-5">
          <div className="card">
          <div className="divCategorias-inferior1 ">
            <Link to="/cuadriceps" className="tituloCategorias LinkCategorias">
              <h3>CUADRICEPS</h3>
            </Link>
          </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior2 ">
              <Link to="/femoral" className="tituloCategorias LinkCategorias">
                <h3>FEMORALES</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior3">
              <Link to="/gluteos" className="tituloCategorias LinkCategorias">
                <h3>GLUTEOS</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior4">
              <Link to="/pantorrillas" className="tituloCategorias LinkCategorias">
                <h3>PANTORRILLAS</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior5">
              <Link to="/aduptores" className="tituloCategorias LinkCategorias">
                <h3>ADUPTORES</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior6">
              <div className="tituloCategorias">
                <h3>HIIT</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CategoriaInferior;
