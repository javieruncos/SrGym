import React from "react";
import "../../styles/Inicio.css";

const Inicio = () => {
  return (
    <div>
      {/*contenedor de la portada */}
      <section>
        <article>
          <div>
            <div className="portada"></div>
            <div className="descripcion ">
              <div className="text-center">
               <h1 className="display-1">SR GYM</h1>
              </div>
            </div>
          </div>
        </article>
      </section>
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
    </div>
  );
};

export default Inicio;
