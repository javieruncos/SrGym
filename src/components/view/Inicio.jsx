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
            <div className="descripcion row">
              <div className="col-12 col-md-6">
                <div className=" mt-4  w-100">
                  <h1>titulo mas otra cosa</h1>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  className="d-flex justify-content-center align-items-center w-100"
                  style={{ height: 200 }}
                >
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    veniam corporis sint quibusdam assumenda nobis cupiditate,
                    aspernatur natus voluptatum sequi odit culpa non impedit
                    totam labore reprehenderit cum hic doloribus!
                  </p>
                </div>
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
                <h4 className="display-4">categorias tren superior</h4>
              </div>
            </div>
          </div>
          <div className="row text-warning mt-5">
             <div className="col-12 col-md-4 col-lg-4">
               <div className="divCategorias1">
                <div>
                <h3>PECTORALES</h3>
                </div>
               </div>
             </div>
             <div className="col-12 col-md-4 col-lg-4">
              <div className="divCategorias2 ">
                <div>
                 <h3>ESPALDA</h3>
                </div>
              </div>
             </div>
             <div className="col-12 col-md-4 col-lg-4">
              <div className="divCategorias3">
              <h3>HOMBROS</h3>
              </div>
             </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
