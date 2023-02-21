import { useEffect, useState } from "react";
import { listaEjercicio } from "../helper/queriesEjercicio";


 export const  useEspaldaHook =()=> {
    const [ejerciciosEspalda, setEjerciciosEspalda] = useState([])
   
    useEffect(()=>{
      listaEjercicio().then((respuesta)=>{
            const filtro = respuesta[0].filter(item => item.categoria === "espalda"  )
           const resultado = filtro
            setEjerciciosEspalda(resultado)
      })
    },[])
    
    return  {ejerciciosEspalda}
}

