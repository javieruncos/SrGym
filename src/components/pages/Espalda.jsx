import React from "react";
import CardEjercicio from "../ejercicios/CardEjercicio";
import {useEspaldaHook} from "../../hooks/rutinas"


const Espalda = () => {
  
   const {ejerciciosEspalda} = useEspaldaHook()
  
  return (
    <div className="container">
      <div className=" mt-5 text-light">
        <h2 className="text-center">Ejercicios para Espalda</h2>
      </div>
      <div className="row">
        {ejerciciosEspalda.map((item) => (
          <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
        ))}
      </div>
    </div>
  );
};

export default Espalda;
