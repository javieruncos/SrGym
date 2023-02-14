import React from "react";
import "../../styles/Cliente.css";
import CategoriaInferior from "../ejercicios/CategoriaInferior";
import Categorias from "../ejercicios/Categorias";

const EspacioCliente = () => {
  return (
    <div>
      <div className="portadaCliente">
        <div className="tituloPortadaCliente">
          <div className=" ">
            <h1 className="display-2">Espacio Cliente</h1>
            <p>
              En el momento en que ingrese, se
              sentirá inspirado para esforzarse un poco más, sudar un poco más y
              creer un poco más en usted mismo. Con cada día, te levantarás con
              confianza y sudarás con un propósito junto a una comunidad que
              está aquí para apoyarte, pase lo que pase.
            </p>
          </div>
        </div>
      </div>
      {/* seccion donde mostraremos las categorias de ejercicios */}
      <section className="container mt-4">
        <article>
          <div>
            <h2 className="text-center display-4 titulos">Rutinas</h2>
            <p className="text-center text-light fs-4">
              Entrena de la mejor manera con nuestra guia completa de ejercicios
            </p>
          </div>
          <Categorias></Categorias>
          <CategoriaInferior></CategoriaInferior>
        </article>
      </section>
    </div>
  );
};

export default EspacioCliente;
