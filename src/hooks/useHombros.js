import { useState, useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";

export const useHombros = () => {
  const [listaHombros, setListaHmbros] = useState([])



  useEffect(() => {
    listaEjercicio().then((respuesta) => {
        const filtro = respuesta.filter((item)=> item.categoria === "hombros")
        const resultadoFiltro = filtro
      console.log(respuesta);
      setListaHmbros(resultadoFiltro)
    });
  }, []);

  return {listaHombros}
};
