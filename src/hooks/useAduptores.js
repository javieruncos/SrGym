import { useState, useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";

export const useAduptores = () => {
  const [ejerciciosAduptores, setEjerciciosAduptores] = useState([]);
  useEffect(() => {
    listaEjercicio().then((respuesta) => {
      const filtro = respuesta[0].filter((item) => item.categoria === "aduptores");
      const resultadoFiltro = filtro;
      setEjerciciosAduptores(resultadoFiltro);
    });
  }, []);

  return { ejerciciosAduptores };
};
