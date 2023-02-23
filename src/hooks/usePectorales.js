import { useState, useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";

export const usePectorales = () => {
  const [pectorales, setPectorales] = useState([]);

  useEffect(() => {
    listaEjercicio().then((respuesta) => {
      console.log(respuesta)
      const filtro = respuesta[0].filter((item) => item.categoria === "pectorales");
      const resultado = filtro;
      setPectorales(resultado);
    });
  }, []);

  return { pectorales };
};
