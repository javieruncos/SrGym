import { useState,useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";


export const usePantorrilla = ()=>{
    const [ejercicioPantorrilla, setEjercicioPantorrilla] = useState([])

    useEffect(()=>{
      listaEjercicio().then((respuesta) =>{
          const filtro = respuesta.filter((item) => item.categoria === "pantorrilla");
          const resultadoFiltro = filtro;
          setEjercicioPantorrilla(resultadoFiltro)
      })
    },[])

    return {ejercicioPantorrilla}
}