import React from 'react';

const Pagination = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
          <ul className="text-light pagination pagination-md">
            <li className="page-item bg-dark"><a href="/usuario/cliente" className="page-link bg-warning  text-dark">atras</a></li>
            <li className="page-item "><a href="/cuadriceps" className="page-link bg-warning  text-dark">1</a></li>
            <li className="page-item"><a href="/femoral" className="page-link bg-warning text-dark">2</a></li>
            <li className="page-item"><a href="/gluteos" className="page-link bg-warning text-dark">3</a></li>
            <li className="page-item"><a href="/pantorrillas" className="page-link bg-warning text-dark">4</a></li>
            <li className="page-item"><a href="/aduptores" className="page-link bg-warning text-dark">5</a></li>
            <li className="page-item"><a href="/pectorales" className="page-link bg-warning text-dark">tren superior</a></li>
          </ul>
      </div>
    );
};

export default Pagination;