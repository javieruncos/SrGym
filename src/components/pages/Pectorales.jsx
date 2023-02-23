import React from "react";
import { usePectorales } from "../../hooks/usePectorales";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationSuperior from "../ejercicios/PaginationSuperior";

const Pectorales = () => {
  const { pectorales } = usePectorales();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Pectorales</h2>
      </div>
      <div className="row">
        {pectorales.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationSuperior></PaginationSuperior>
    </div>
  );
};

export default Pectorales;
