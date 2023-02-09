import React from "react";
import { usePantorrilla } from "../../hooks/usePantorrila";
import CardEjercicio from "../ejercicios/CardEjercicio";

const Pantorrila = () => {
  const { ejercicioPantorrilla } = usePantorrilla();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Femorales</h2>
      </div>
      <div className="row">
        {ejercicioPantorrilla.map((item) => (
          <CardEjercicio ejercicios={item} key={item.id}></CardEjercicio>
        ))}
      </div>
    </div>
  );
};

export default Pantorrila;
