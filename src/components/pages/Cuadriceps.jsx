import React, { useEffect,useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import { listaEjercicio } from '../../helper/queriesEjercicio';

const Cuadriceps = () => {
    const [Ejercicios, setejercicios] = useState([])

    useEffect(()=>{
       listaEjercicio().then((respuesta)=>{
           console.log(respuesta.categoria)
         
       })
    },[])

    return (
        <div>
           
        </div>
    );
};

export default Cuadriceps;