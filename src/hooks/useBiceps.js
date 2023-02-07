import { useState, useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";

export const useBiceps = () => {
  const [ejercicioBiceps, setEjercicioBiceps] = useState([]);

  useEffect(() => {
    listaEjercicio().then((respuesta) => {
      const filtro = respuesta.filter((item) => item.categoria === "biceps");
      const resultadoFiltro = filtro;
      setEjercicioBiceps(resultadoFiltro);
    });
  }, []);

  return { ejercicioBiceps };
};
