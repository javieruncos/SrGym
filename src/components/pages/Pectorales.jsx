import React, { useEffect,useState } from 'react';
import { listaEjercicio } from '../../helper/queriesEjercicio';
import CardEjercicio from '../ejercicios/CardEjercicio';

const Pectorales = () => {
    const [Ejercicios, setejercicios] = useState([])

    useEffect(()=>{
       listaEjercicio().then((respuesta)=>{
           console.log(respuesta)
            setejercicios(respuesta)
       })
    },[])

    return (
        <div className='container'>
            <div className=' mt-5 text-light'>
                <h2 className="text-center">Ejercicios para Pectorales</h2>
            </div>
            <div className='row'>
              {
                Ejercicios.map((item)=> <CardEjercicio ejercicios={item} key={item.id}></CardEjercicio>)
              }
            </div>
        </div>
    );
};

export default Pectorales;