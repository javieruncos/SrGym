import React from 'react';

const Categorias = () => {
    return (
        <section className="container text-light">
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
                <div className="tituloCategorias">
                <h3>PECTORALES</h3>
                </div>
               </div>
             </div>
             <div className="card">
              <div className="divCategorias2 ">
                <div className="tituloCategorias">
                 <h3>ESPALDA</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias3">
                <div className="tituloCategorias">
                <h3>HOMBROS</h3>
                </div>
              </div>
             </div>
             <div className="card">
              <div className="divCategorias4">
                <div className="tituloCategorias">
                <h3>BICEPS</h3>
                </div>
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