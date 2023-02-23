import React from "react";
import { useCuadriceps } from "../../hooks/useCuadriceps";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationInferior from "../ejercicios/PaginationInferior";

const Cuadriceps = () => {
  const { ejerciciosCuadriceps } = useCuadriceps();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Cuadriceps</h2>
      </div>
      <div className="row">
        {ejerciciosCuadriceps.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationInferior></PaginationInferior>
    </div>
  );
};

export default Cuadriceps;
