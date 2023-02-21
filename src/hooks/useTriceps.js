import { useState, useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";

export const useTriceps = () => {
  const [ejerciciosTriceps, setEjerciciosTriceps] = useState([]);

  useEffect(() => {
    listaEjercicio().then((respuesta) => {
      const filtro = respuesta[0].filter((item) => item.categoria === "triceps");
      const resultadoFiltro = filtro;
      setEjerciciosTriceps(resultadoFiltro);
    });
  }, []);

  return { ejerciciosTriceps };
};
