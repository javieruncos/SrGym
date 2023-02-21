import { useState,useEffect } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";


export const useCuadriceps = ()=>{
    const [ejerciciosCuadriceps, setEjerciciosCuadriceps] = useState([])

    useEffect(()=>{
       listaEjercicio().then((respuesta)=>{
         const filtro = respuesta[0].filter((item)=> item.categoria === "cuadriceps")
         const resultado= filtro;
         setEjerciciosCuadriceps(resultado)
       })
    },[])

    return {ejerciciosCuadriceps}
}