import React from "react";
import { useFemoral } from "../../hooks/useFemoral";
import CardEjercicio from "../ejercicios/CardEjercicio";

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
    </div>
  );
};

export default Femoral;
