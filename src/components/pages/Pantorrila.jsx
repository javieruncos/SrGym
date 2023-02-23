import React from "react";
import { usePantorrilla } from "../../hooks/usePantorrila";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationInferior from "../ejercicios/PaginationInferior"

const Pantorrila = () => {
  const { ejercicioPantorrilla } = usePantorrilla();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Pantorrillas</h2>
      </div>
      <div className="row">
        {ejercicioPantorrilla.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationInferior></PaginationInferior>
    </div>
  );
};

export default Pantorrila;
