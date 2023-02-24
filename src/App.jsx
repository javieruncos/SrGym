import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Menu from "./components/common/Menu";
import Inicio from "./components/view/Inicio";
import Footer from "./components/common/Footer";
import Gimnasio from "./components/view/Gimnasio";
import Planes from "./components/view/Planes";
import PlanSmart from "./components/view/PlanSmart";
import PlanBlack from "./components/view/PlanBlack";
import Login from "./components/view/Login";
import Regristro from "./components/view/Regristro";
import Error404 from "./components/view/Error404";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import Detalle from "./components/view/Detalle";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioGym")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <div className="App">
      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado}setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/detalle/:categoria" element={<Detalle></Detalle>}></Route>
          <Route exact path="/gym" element={<Gimnasio></Gimnasio>}></Route>
          <Route exact path="/planes" element={<Planes></Planes>}></Route>
          <Route exact path="/smart" element={<PlanSmart></PlanSmart>}></Route>
          <Route exact path="/black" element={<PlanBlack></PlanBlack>}></Route>
          <Route exact path="/registro" element={ <Regristro setUsuarioLogueado={setUsuarioLogueado}></Regristro> }></Route>
          <Route exact path="/login" element={ <Login usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route path="/usuario/*" element={
            <RutasProtegidas>
              <RutasAdmin setUsuarioLogueado={setUsuarioLogueado} usuarioLogueado={usuarioLogueado}></RutasAdmin>
            </RutasProtegidas>
          }>
          </Route>
          <Route exact path="/error" element={ <Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
