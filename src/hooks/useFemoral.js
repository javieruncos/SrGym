import { useState, useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";


export const useFemoral = () => {
  const [ejerciciosFemoral, setEjerciciosFemoral] = useState([]);

  useEffect(() => {
    listaEjercicio().then((respuesta) => {
      const filtro = respuesta[0].filter((item) => item.categoria === "femorales");
      const resultadoFiltro = filtro;
      setEjerciciosFemoral(resultadoFiltro);
    });
  }, []);

  return { ejerciciosFemoral };
};
