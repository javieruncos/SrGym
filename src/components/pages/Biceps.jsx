import React from 'react';
import { useBiceps } from '../../hooks/useBiceps';
import CardEjercicio from '../ejercicios/CardEjercicio';
import PaginationSuperior from '../ejercicios/PaginationSuperior';
const Biceps = () => {
     const {ejercicioBiceps} = useBiceps()



    return (
        <div className="container">
        <div className=" mt-5 text-light">
          <h2 className="text-center">Ejercicios para Biceps</h2>
        </div>
        <div className="row">
          {ejercicioBiceps.map((item) => (
            <CardEjercicio ejercicios={item} key={item._id}></CardEjercicio>
          ))}
        </div>
        <PaginationSuperior></PaginationSuperior>
      </div>
    );
};

export default Biceps;