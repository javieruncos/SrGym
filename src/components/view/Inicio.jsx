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
      <section className="container">
        <article>
          <div className="text-light">
            <h3 className="text-light display-3 text-center">
              ELIGE <span className="text-warning"> TU PLAN</span>
            </h3>
            <div>
              <p className="text-center w-75 mx-auto planTexto">
                Entrena con nosotros eligiendo un plan.Todos incluyen las areas
                de cardio , peso integrado , peso libre, funcional , profesores
                de piso para evaluaciones y creacion de rutinas , vestuarios y
                mas
              </p>
            </div>
          </div>
          <div >
          <div className="divPlanes container">
              <div className="planes">
                 <div>
                   <div className="planBlack"></div>
                   <div className="precio"></div>
                 </div>

              </div>
              <div className="planes">

              </div>
          </div>
          </div>
        </article>
      </section>
      <section className="container">
        <article>
          <div className="divApp">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="colApp container">
                  <h2 className="display-6">
                    Proximamente Smart fit App : una experiencia de
                    entrenamiento completa dentro y fuera del gimnasio
                  </h2>
                  <p>
                    No importa si ya tienes experiencia o si recién estás
                    comenzando a practicar actividad física, una cosa es segura:
                    ¡al descargar gratis la aplicación Smart Fit , obtienes el
                    mejor aliado para tu rutina de entrenamiento! Exclusivo para
                    clientes.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 ">
                <div className="colApp2 container">
                  <div>
                    <img
                      src="https://assets.smartfit.com.br/production/newHome/img-smartphone-es.png"
                      alt="aplicacion"
                    />
                  </div>
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
