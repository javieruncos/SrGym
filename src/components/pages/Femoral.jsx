import React from "react";
import { Pagination } from "react-bootstrap";
import { useFemoral } from "../../hooks/useFemoral";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationInferior from "../ejercicios/PaginationInferior";


const Femoral = () => {
  const { ejerciciosFemoral } = useFemoral();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Femorales</h2>
      </div>
      <div className="row">
        {ejerciciosFemoral.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationInferior></PaginationInferior>
    </div>
  );
};

export default Femoral;
