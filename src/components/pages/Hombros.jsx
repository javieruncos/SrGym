import React from "react";
import { useHombros } from "../../hooks/useHombros";
import CardEjercicio from "../ejercicios/CardEjercicio";

const Hombros = () => {
  const { listaHombros } = useHombros();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Hombros</h2>
      </div>
      <div className="row">
        {listaHombros.map((item) => (
          <CardEjercicio ejercicios={item} key={item.id}></CardEjercicio>
        ))}
      </div>
    </div>
  );
};

export default Hombros;
