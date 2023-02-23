import React from "react";
import { useAduptores } from "../../hooks/useAduptores";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationInferior from "../ejercicios/PaginationInferior"

const Aduptores = () => {
  const { ejerciciosAduptores } = useAduptores();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Aduptores</h2>
      </div>
      <div className="row">
        {ejerciciosAduptores.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationInferior></PaginationInferior>
    </div>
  );
};

export default Aduptores;
