import React from "react";
import { useTriceps } from "../../hooks/useTriceps";
import CardEjercicio from "../ejercicios/CardEjercicio";
import PaginationSuperior from "../ejercicios/PaginationSuperior";


const Triceps = () => {

   const {ejerciciosTriceps} = useTriceps()


  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Triceps</h2>
      </div>
      <div className="row">
        {ejerciciosTriceps.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
      <PaginationSuperior></PaginationSuperior>
    </div>
  );
};

export default Triceps;
