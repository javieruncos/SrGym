import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu';
import Inicio from './components/view/Inicio';
import EspacioCliente from './components/view/EspacioCliente';
import Pectorales from './components/pages/Pectorales';
import Espalda from './components/pages/Espalda';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/cliente' element={<EspacioCliente></EspacioCliente>}></Route>
        <Route exact path='/pectorales' element={<Pectorales></Pectorales>}></Route>
        <Route exact path='/espalda' element={<Espalda></Espalda>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
