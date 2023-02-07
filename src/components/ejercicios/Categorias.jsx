import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = () => {
    return (
        <section className="container text-light mt-5">
        <article>
          <div>
            <div>
              <div className="text-center">
                <h4 className="display-4 titulos"> Tren superior</h4>
              </div>
            </div>
          </div>
          <div className=" cards text-light mt-5">
             <div className="card">
               <div className="divCategorias1">
                <Link to="/pectorales" className="tituloCategorias LinkCategorias">
                <h3>PECTORALES</h3>
                </Link>
               </div>
             </div>
             <div className="card">
              <div className="divCategorias2 ">
                <Link to="/espalda" className="tituloCategorias LinkCategorias">
                 <h3>ESPALDA</h3>
                </Link>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias3">
                <Link to="/hombros" className="tituloCategorias LinkCategorias">
                <h3>HOMBROS</h3>
                </Link>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias4">
                <Link to="/biceps" className="tituloCategorias LinkCategorias">
                <h3>BICEPS</h3>
                </Link>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias5">
                <div className="tituloCategorias">
                <h3>TRICEPS</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias6">
                <div className="tituloCategorias">
                <h3>ANTEBRAZOS</h3>
                </div>
              </div>
             </div>
          </div>
        </article>
      </section>
    );
};

export default Categorias;