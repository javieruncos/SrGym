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
        <article className="container">
          <div className="text-light">
            <h3 className="text-light display-3 text-center">
              ELIGE <span className="text-warning"> TU PLAN</span>
            </h3>
            <div>
              <p className="text-center w-75 mx-auto fs-4">
                Entrena con nosotros eligiendo un plan.Todos incluyen las areas
                de cardio , peso integrado , peso libre, funcional , profesores
                de piso para evaluaciones y creacion de rutinas , vestuarios y
                mas
              </p>
            </div>
          </div>
          <div>
            <div className="divPlanes container mt-5">
              <div className="planes">
                <div className="descripcionPlan">
                  <div className="planBlack">
                    <span className="text-light">PLAN</span>
                    <h3 className="textoPlan display-6">BLACK</h3>
                  </div>
                  <div className="precio bg-Plan">
                    <span className="text-light">DESDE</span>
                    <h3 className="fs-1 fw-bold">$ 5199</h3>
                  </div>
                  <div className="text-center">
                    <p>
                      Entrena en cualquiera de nuestras sedes en América Latina
                    </p>
                    <span className="fw-bold">BENEFICIOS</span>
                    <p>Acceso a todas las áreas del gimnasio</p>
                    <hr />
                    <span className="fw-bold">SMART GO</span>
                    <p>Invitar un amigo a entrenar</p>
                    <p>
                      Área de peso libre, peso integrado, cardio y clases
                      grupales
                    </p>
                    <p>Acceso a otras sedes de la cadena</p>
                    <button className="btn btn-dark">INSCRIBITE YA</button>
                  </div>
                </div>
              </div>
              <div className="planes">
                <div className="descripcionPlan">
                  <div className="planBlack bg-Plan">
                    <span className="text-light">PLAN</span>
                    <h3 className=" display-6">BLACK</h3>
                  </div>
                  <div className="precio bg-Plan2">
                    <span className="text-light">DESDE</span>
                    <h3 className="fs-1 fw-bold textoPlan">$ 5199</h3>
                  </div>
                  <div className="text-center">
                    <p>
                      Entrena en cualquiera de nuestras sedes en América Latina
                    </p>
                    <span className="fw-bold">BENEFICIOS</span>
                    <p>Acceso a todas las áreas del gimnasio</p>
                    <hr />
                    <span className="fw-bold">SMART GO</span>
                    <p>Invitar un amigo a entrenar</p>
                    <p>
                      Área de peso libre, peso integrado, cardio y clases
                      grupales
                    </p>
                    <p>Acceso a otras sedes de la cadena</p>
                    <button className="btn btn-dark">INSCRIBITE YA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <article className="container">
        <div className="divApp container">
          <div className="container">
            <h2 className="display-6">
              Proximamente Smart fit App una experiencia de entrenamiento
              completa dentro y fuera del gimnasio
            </h2>
            <p>
              No importa si ya tienes experiencia o si recién estás comenzando a
              practicar actividad física, una cosa es segura: ¡al descargar
              gratis la aplicación Smart Fit , obtienes el mejor aliado para tu
              rutina de entrenamiento! Exclusivo para clientes.
            </p>
          </div>
          <div className="container">
            <img
              src="https://assets.smartfit.com.br/production/newHome/img-smartphone-es.png"
              alt="aplicacion"
              className="w-100"
              style={{ height: 500 }}
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Inicio;
