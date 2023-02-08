import React from "react";
import { useGluteos } from "../../hooks/useGluteos";
import CardEjercicio from "../ejercicios/CardEjercicio";

const Gluteos = () => {
  const { ejerciciosGluteos } = useGluteos();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Hombros</h2>
      </div>
      <div className="row">
        {ejerciciosGluteos.map((item) => (
          <CardEjercicio ejercicios={item} key={item.id}></CardEjercicio>
        ))}
      </div>
    </div>
  );
};

export default Gluteos;
