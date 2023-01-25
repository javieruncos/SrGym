import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Menu from './components/common/Menu';
import Inicio from './components/view/Inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
