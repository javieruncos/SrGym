import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import EspacioCliente from '../view/EspacioCliente';
import Regristro from '../view/Regristro';

const RutasAdmin = ({setUsuarioLogueado}) => {
    return (
       <>
          <Routes>
          <Route exact path="/cliente" element={<EspacioCliente></EspacioCliente>}></Route>
          </Routes>
       </>
    );
};

export default RutasAdmin;