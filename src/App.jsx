import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from 'react';
import Menu from './components/common/Menu';
import Inicio from './components/view/Inicio';
import EspacioCliente from './components/view/EspacioCliente';
import Pectorales from './components/pages/Pectorales';
import Espalda from './components/pages/Espalda';
import Hombros from './components/pages/Hombros';
import Biceps from './components/pages/Biceps';
import Triceps from './components/pages/Triceps';
import Cuadriceps from './components/pages/Cuadriceps';
import Femoral from './components/pages/Femoral';
import Gluteos from './components/pages/Gluteos';
import Pantorrillas from './components/pages/Pantorrila';
import Aduptores from './components/pages/Aduptores';
import Footer from './components/common/Footer';
import Gimnasio from './components/view/Gimnasio';
import Planes from './components/view/Planes';
import PlanSmart from './components/view/PlanSmart';
import PlanBlack from './components/view/PlanBlack';
import Login from './components/view/Login';
import Regristro from './components/view/Regristro';


function App() {

  const usuario = JSON.parse(localStorage.getItem("usuarioGym")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)



  return (
    <div className="App">
      <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/cliente' element={<EspacioCliente></EspacioCliente>}></Route>
        <Route exact path='/pectorales' element={<Pectorales></Pectorales>}></Route>
        <Route exact path='/espalda' element={<Espalda></Espalda>}></Route>
        <Route exact path='/hombros' element={<Hombros></Hombros>}></Route>
        <Route exact path='/biceps' element={<Biceps></Biceps>}></Route>
        <Route exact path='/triceps' element={<Triceps></Triceps>}></Route>
        <Route exact path='/cuadriceps' element={<Cuadriceps></Cuadriceps>}></Route>
        <Route exact path='/femoral' element={<Femoral></Femoral>}></Route>
        <Route exact path='/gluteos' element={<Gluteos></Gluteos>}></Route>
        <Route exact path='/pantorrillas' element={<Pantorrillas></Pantorrillas>}></Route>
        <Route exact path='/aduptores' element={<Aduptores></Aduptores>}></Route>
        <Route exact path='/gym' element={<Gimnasio></Gimnasio>}></Route>
        <Route exact path='/planes' element={<Planes></Planes>}></Route>
        <Route exact path='/smart' element={<PlanSmart></PlanSmart>}></Route>
        <Route exact path='/black' element={<PlanBlack></PlanBlack>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/registro' element={<Regristro setUsuarioLogueado={setUsuarioLogueado}></Regristro>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
