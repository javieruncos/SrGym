import React from "react";
import "../../styles/Inicio.css";
import {Link} from "react-router-dom"

const Inicio = () => {
  return (
    <div>
      {/*contenedor de la portada */}
      <section>
        <article>
          <div>
            <div className="portada mb-5">
              <div className="text-light tituloPortada ">
                <div className=" fw-bold">
                <h1 className="display-3 fw-bold ms-5">PLAN BLACK $5199</h1>
                <p className="fs-1 ms-5">+ANUALIDAD GRATIS</p>
                <Link to={"/planes"} className="btn btn-warning w-50 text-light ms-5">EMPEZA HOY</Link>
                </div>
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
            {/* seccion planes de entrenamiento */}
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
                    <Link to="/smart" className="btn btn-dark">INSCRIBITE YA</Link>
                  </div>
                </div>
              </div>
              <div className="planes">
                <div className="descripcionPlan">
                  <div className="planBlack bg-Plan">
                    <span className="text-light">PLAN</span>
                    <h3 className=" display-6">SMART</h3>
                  </div>
                  <div className="precio bg-Plan2">
                    <span className="text-light">DESDE</span>
                    <h3 className="fs-1 fw-bold textoPlan">$ 4499</h3>
                  </div>
                  <div className="text-center">
                    <p>
                      Entrena en cualquiera de nuestras sedes en América Latina
                    </p>
                    <span className="fw-bold">BENEFICIOS</span>
                    <p>Acceso a todas las áreas del gimnasio</p>
                    <hr />
                    <span className="fw-bold">SMART GO</span>
                    <p>Sin cargo de cancelación</p>
                    <p>
                      Área de peso libre, peso integrado, cardio y clases
                      grupales
                    </p>
                    <p>Acceso a una sede de la cadena</p>
                    <Link to="/smart" className="btn btn-dark">INSCRIBITE YA</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      {/* seccion de aplicacion movil */}
      <div className="container">
        <div className="divApp container">
          <div className="container">
            <div className="mt-5">
              <h2 className="display-6">
                Proximamente Smart fit App una experiencia de entrenamiento
                completa dentro y fuera del gimnasio
              </h2>
              <p>
                No importa si ya tienes experiencia o si recién estás comenzando
                a practicar actividad física, una cosa es segura: ¡al descargar
                gratis la aplicación Smart Fit , obtienes el mejor aliado para
                tu rutina de entrenamiento! Exclusivo para clientes.
              </p>
            </div>
            <div className=" d-flex justify-content-center gap-5 my-4">
              <div>
                <img
                  src="https://assets.smartfit.com.br/production/newHome/google-play-badge-es.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://assets.smartfit.com.br/production/newHome/google-play-badge-es.png"
                  alt=""
                />
              </div>
            </div>
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
      </div>
      {/* seccion de espacio fitness */}
      <section className="container my-5">
        <article className="text-light">
          <div className="text-center">
            <h4 className="display-4">
              Todo lo que <span className="text-yellow">necesitas</span>
            </h4>
            <p className="fs-4">
              {" "}
              Un ecosistema de fitness que ofrece más libertad a la hora de
              entrenar.
            </p>
          </div>
          <div className="espacioFit">
            <div>
              <img
                src={require("../../img/salon.jpg")}
                alt="salon"
                className="w-100"
              />
            </div>
            <div>
              <img
                src={require("../../img/salon2.jpg")}
                alt="salon"
                className="w-100"
              />
            </div>
            <div>
              <img
                src={require("../../img/salon3.webp")}
                alt="salon"
                className="w-100"
              />
            </div>
            <div>
              <img
                src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_cardio.jpg"
                alt="salon"
                className="w-100"
              />
            </div>
            <div>
              <img
                src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_fitness-app-cl.jpg"
                alt="salon"
                className="w-100"
              />
            </div>
            <div>
              <img
                src="https://cdn.smartfit.com.br/nossa-smart/img_cover_academia_fitness-remote-cl.jpg"
                alt="salon"
                className="w-100"
              />
            </div>
          </div>
        </article>
      </section>
      <section className="container my-5">
        <div className="text-center text-light mt-5">
          <h4 className="display-5 ColorYellow mt-5">INSCRIBETE AHORA</h4>
          <p className="fs-4">
            Realizá tu inscripción en tan sólo 2 minutos y podrás comenzar tu
            entrenamiento.
          </p>
          <hr />
        </div>
        <div className="row gap-2 d-flex justify-content-center mt-3">
          <div className="col-12 col-md-4 col-lg-3 registro">
            <i className="bi bi-geo-alt text-light display-1 "></i>
            <span className="fw-bold text-light">Elegí tu sede</span>
          </div>
          <div className="col-12 col-md-4 col-lg-3 registro">
            <i className="bi bi-card-list text-light display-1"></i>
            <span className="fw-bold text-light">Escogé un plan</span>
          </div>
          <div className="col-12 col-md-4 col-lg-3 registro">
            <i className="bi bi-person-check-fill text-light display-1"></i>
            <span className="fw-bold text-light">Registrate y ¡Listo!</span>
          </div>
        </div>
        <div className="text-center">
          <a href="/planes" className="btn btn-outline-secondary">INSCRIBIRME AHORA</a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
