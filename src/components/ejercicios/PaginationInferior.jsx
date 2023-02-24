import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
          <ul className="text-light pagination pagination-md">
            <li className="page-item bg-dark"><Link to={"/usuario/cliente"} className="page-link bg-warning  text-dark">atras</Link></li>
            <li className="page-item "><Link to={"/detalle/cuadriceps"} className="page-link bg-warning  text-dark">1</Link></li>
            <li className="page-item"><Link to={"detalle/femoral"} className="page-link bg-warning text-dark">2</Link></li>
            <li className="page-item"><Link to={"/gluteos"} className="page-link bg-warning text-dark">3</Link></li>
            <li className="page-item"><Link to={"/pantorrillas"} className="page-link bg-warning text-dark">4</Link></li>
            <li className="page-item"><Link to={"/aduptores"} className="page-link bg-warning text-dark">5</Link></li>
            <li className="page-item"><Link to={"/pectorales"} className="page-link bg-warning text-dark">tren superior</Link></li>
          </ul>
      </div>
    );
};

export default Pagination;