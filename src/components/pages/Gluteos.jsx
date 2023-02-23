import React from "react";
import { useGluteos } from "../../hooks/useGluteos";
import CardEjercicio from "../ejercicios/CardEjercicio";
import Pagination from "../ejercicios/PaginationInferior";

const Gluteos = () => {
  const { ejerciciosGluteos } = useGluteos();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Gluteos</h2>
      </div>
      <div className="row">
        {ejerciciosGluteos.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Gluteos;
