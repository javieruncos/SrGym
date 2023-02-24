import React from 'react';
import { Link } from 'react-router-dom';


const PaginationSuperior = () => {
    return (
        <div className="d-flex justify-content-center mt-5 ">
        <ul className="text-light pagination pagination-md ">
          <li className="page-item bg-dark"><Link to={"/usuario/cliente"} className="page-link bg-warning  text-dark">atras</Link></li>
          <li className="page-item "><Link to={"/pectorales"} className="page-link bg-warning  text-dark">1</Link></li>
          <li className="page-item"><Link to={"/espalda"} className="page-link bg-warning text-dark">2</Link></li>
          <li className="page-item"><Link to={"/hombros"} className="page-link bg-warning text-dark">3</Link></li>
          <li className="page-item"><Link to={"/biceps"} className="page-link bg-warning text-dark">4</Link></li>
          <li className="page-item"><Link to={"/triceps"} className="page-link bg-warning text-dark">5</Link></li>
          <li className="page-item"><Link to={"/cuadriceps"} className="page-link bg-warning text-dark">tren inferior</Link></li>
        </ul>
    </div>
    );
};

export default PaginationSuperior;