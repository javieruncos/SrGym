import React from 'react';


const PaginationSuperior = () => {
    return (
        <div className="d-flex justify-content-center mt-5 ">
        <ul className="text-light pagination pagination-md ">
          <li className="page-item bg-dark"><a href="/usuario/cliente" className="page-link bg-warning  text-dark">atras</a></li>
          <li className="page-item "><a href="/pectorales" className="page-link bg-warning  text-dark">1</a></li>
          <li className="page-item"><a href="/espalda" className="page-link bg-warning text-dark">2</a></li>
          <li className="page-item"><a href="/hombros" className="page-link bg-warning text-dark">3</a></li>
          <li className="page-item"><a href="/biceps" className="page-link bg-warning text-dark">4</a></li>
          <li className="page-item"><a href="/triceps" className="page-link bg-warning text-dark">5</a></li>
          <li className="page-item"><a href="/cuadriceps" className="page-link bg-warning text-dark">tren inferior</a></li>
        </ul>
    </div>
    );
};

export default PaginationSuperior;