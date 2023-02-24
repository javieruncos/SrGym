import React from 'react';


const PaginationSuperior = () => {
    return (
        <div className="d-flex justify-content-center mt-5 ">
          <nav  aria-label="Page navigation example">
        <ul className="text-light pagination pagination-md text-truncate">
          <li className="page-item bg-dark"><a href="/usuario/cliente" className="page-link bg-warning  text-dark">atras</a></li>
          <li className="page-item "><a href="/detalle/pectorales" className="page-link bg-warning  text-dark">1</a></li>
          <li className="page-item"><a href="/detalle/espalda" className="page-link bg-warning text-dark">2</a></li>
          <li className="page-item"><a href="/detalle/hombros" className="page-link bg-warning text-dark">3</a></li>
          <li className="page-item"><a href="/detalle/biceps" className="page-link bg-warning text-dark">4</a></li>
          <li className="page-item"><a href="/detalle/triceps" className="page-link bg-warning text-dark">5</a></li>
          <li className="page-item"><a href="/detalle/cuadriceps" className="page-link bg-warning text-dark">tren inferior</a></li>
        </ul>

          </nav>
    </div>
    );
};

export default PaginationSuperior;