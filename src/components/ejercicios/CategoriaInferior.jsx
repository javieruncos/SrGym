import React from 'react';
import "../../styles/Inferior.css";

const CategoriaInferior = () => {
    return (
        <section className="container text-light mt-5">
        <article>
          <div>
            <div>
              <div className="text-center">
                <h4 className="display-4 titulos"> Tren Inferior</h4>
              </div>
            </div>
          </div>
          <div className=" cards text-light mt-5">
             <div className="card">
               <div className="divCategorias1">
                <div className="tituloCategorias">
                <h3>CUADRICEPS</h3>
                </div>
               </div>
             </div>
             <div className="card">
              <div className="divCategorias2 ">
                <div className="tituloCategorias">
                 <h3>FEMORALES</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias3">
                <div className="tituloCategorias">
                <h3>GLUTEOS</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias4">
                <div className="tituloCategorias">
                <h3>PANTORRILLAS</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias5">
                <div className="tituloCategorias">
                <h3>ADUPTORES</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias6">
                <div className="tituloCategorias">
                <h3>HIIT</h3>
                </div>
              </div>
             </div>
          </div>
        </article>
      </section>
    );
};

export default CategoriaInferior;