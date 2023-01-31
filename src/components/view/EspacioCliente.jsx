import React from "react";
import "../../styles/Cliente.css";
import CategoriaInferior from "../ejercicios/CategoriaInferior";
import Categorias from "../ejercicios/Categorias"

const EspacioCliente = () => {
  return (
    <div>
      <div className="portadaCliente">
        <div className="tituloPortadaCliente">
          <div className=" ">
            <h1 className="display-2">Espacio Cliente</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quibusdam consectetur assumenda possimus earum ut qui consequatur
              ullam officia culpa praesentium blanditiis distinctio facere alias
              repellat sunt esse, quidem numquam corrupti! Nobis, perspiciatis.
              Accusantium eum animi soluta, laborum quisquam ea ex placeat,
              blanditiis aliquid expedita porro possimus dolor optio omnis.
            </p>
          </div>
        </div>
      </div>
      {/* seccion donde mostraremos las categorias de ejercicios */}
      <section className="container mt-4">
        <article>
            <div>
                <h2 className="text-center display-4 titulos">Rutinas</h2>
                <p className="text-center text-light fs-4">Entrena de la mejor manera con nuestra guia completa de ejercicios</p>
            </div>
            <Categorias></Categorias>
            <CategoriaInferior></CategoriaInferior>
        </article>
      </section>
    </div>
  );
};

export default EspacioCliente;
