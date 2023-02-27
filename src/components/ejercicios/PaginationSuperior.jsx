import React from "react";
import { Link } from "react-router-dom";

const PaginationSuperior = () => {
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <nav aria-label="Page navigation example">
        <ul className="text-light pagination pagination-md text-truncate">
          <li className="page-item bg-dark"><Link to={"/usuario/cliente"} className="page-link bg-warning  text-dark">  atras</Link></li>
          <li className="page-item "><Link to={"/detalle/pectorales"} className="page-link bg-warning  text-dark">  1</Link></li>
          <li className="page-item"><Link to={"/detalle/espalda"} className="page-link bg-warning text-dark">2</Link></li>
          <li className="page-item"><Link to={"/detalle/hombros"} className="page-link bg-warning text-dark">3</Link></li>
          <li className="page-item"><Link to={"/detalle/biceps"} className="page-link bg-warning text-dark"> 4</Link></li>
          <li className="page-item"><Link to={"/detalle/triceps"} className="page-link bg-warning text-dark"> 5</Link></li>
          <li className="page-item"><Link to={"/detalle/cuadriceps"} className="page-link bg-warning text-dark"> tren inferior</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationSuperior;
