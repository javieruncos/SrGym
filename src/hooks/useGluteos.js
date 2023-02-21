import { useState,useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";


export const useGluteos = ()=>{
    const [ejerciciosGluteos, setEjerciciosGluteos] = useState([])

    useEffect(()=>{
       listaEjercicio().then((respuesta)=>{
        const filtro = respuesta[0].filter((item)=> item.categoria === "gluteos");
        const resultadoFiltro = filtro
         setEjerciciosGluteos(resultadoFiltro)
       })
    },[])

    return {ejerciciosGluteos}
}