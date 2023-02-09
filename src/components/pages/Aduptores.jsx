import React from "react";
import { useAduptores } from "../../hooks/useAduptores";
import CardEjercicio from "../ejercicios/CardEjercicio";

const Aduptores = () => {
  const { ejerciciosAduptores } = useAduptores();

  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Espalda</h2>
      </div>
      <div className="row">
        {ejerciciosAduptores.map((item) => (
          <CardEjercicio ejercicios={item} key={item.id}></CardEjercicio>
        ))}
      </div>
    </div>
  );
};

export default Aduptores;
