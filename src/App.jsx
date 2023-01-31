import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu';
import Inicio from './components/view/Inicio';
import EspacioCliente from './components/view/EspacioCliente';
import Cuadriceps from './components/pages/Cuadriceps';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/cliente' element={<EspacioCliente></EspacioCliente>}></Route>
        <Route exact path='/cuadriceps' element={<Cuadriceps></Cuadriceps>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
