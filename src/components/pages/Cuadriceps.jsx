import React from "react";
import { useCuadriceps } from "../../hooks/useCuadriceps";
import CardEjercicio from "../ejercicios/CardEjercicio";

const Cuadriceps = () => {

   const {ejerciciosCuadriceps} = useCuadriceps()



  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Espalda</h2>
      </div>
      <div className="row">
        {ejerciciosCuadriceps.map((item) => (
          <CardEjercicio ejercicios={item} key={item.id}></CardEjercicio>
        ))}
      </div>
    </div>
  );
};

export default Cuadriceps;
