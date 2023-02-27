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
            <Link to="/detalle/cuadriceps" className="tituloCategorias LinkCategorias">
              <h3>CUADRICEPS</h3>
            </Link>
          </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior2 ">
              <Link to="/detalle/femoral" className="tituloCategorias LinkCategorias">
                <h3>FEMORALES</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior3">
              <Link to="/detalle/gluteos" className="tituloCategorias LinkCategorias">
                <h3>GLUTEOS</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior4">
              <Link to="/detalle/pantorrillas" className="tituloCategorias LinkCategorias">
                <h3>PANTORRILLAS</h3>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="divCategorias-inferior5">
              <Link to="/detalle/aduptores" className="tituloCategorias LinkCategorias">
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
