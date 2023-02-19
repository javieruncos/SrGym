import React from "react";
import "../../styles/Planes.css";
const Planes = () => {
  return (
    <div>
      <div className="portadaPlanes d-flex justify-content-center align-items-center flex-column">
          <div className=" divPortadaPlanes">
          <h2 className=" display-2 text-center ColorYellow">Planes</h2>
          <div className="container">
          <p className="fs-3 text-center text-light">
          ¡Planes con precios accesibles y de fácil inscripción! Realizá todo on
          line
          </p>
          </div>
          </div>
      </div>
      <section className="container my-5">
        <div className="container d-flex justify-content-center ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 planSmart container">
              <div className=" text-center mt-4">
                  <h4>PLAN SMART</h4>
                  <p>Entrena cuando quieras en tu gimnasio de elección</p>
                  <span className="fs-1">$4.599</span>
                  <div className="pb-2 d-flex flex-column">
                      <p>
                         Inscripción: Varía según la sede Matrícula anual: $ 4.599*
                          Sin multa de cancelación
                       </p>
                       <a href="/smart" className="btn btn-dark w-50 mx-auto">Seleccionar</a>
                       <span className="fw-bold mt-4">Beneficios</span>
                  </div>
              </div>  
              <ul className="lista">
                <li> ✅Acceso a todas las áreas del gimnasio</li>
                <li> ✅Sin cargo de cancelación</li>
                <li> ✅Smart Fit Go</li>
                <li>
                  ✅Área de peso libre, peso integrado, cardio y clases grupales
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-6 Black container">
              <div className="text-center mt-4">
                   <h4>PLAN BLACK</h4>
                   <p>Entrena en cualquiera de nuestros gimnasios en Tucuman</p>
                   <span className="fs-1 text-warning">$5.199</span>
                   <div className="pb-2 d-flex flex-column">
                      <p>
                         Inscripción: Varía según la sede Matrícula anual: $ 4.599* Con
                         multa de cancelación
                      </p>
                      <a href="/black" className="btn btn-warning w-50 mx-auto">Seleccionar</a>
                      <span className="fw-bold text-warning mt-4">Beneficios</span>  
                   </div>   
              </div>
              <ul className="lista">
                  <li>✅ Acceso a todas las áreas del gimnasio</li>
                  <li>✅ Smart Fit Go</li>
                  <li>
                    ✅ Área de peso libre, peso integrado, cardio y clases
                    grupales
                  </li>
                  <li>✅Acceso a otras sedes de la cadena</li>
                  <li>✅Invita un amigo</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center text-light mb-5 container">
        <h3 className="display-4">Elegí tu plan y empezá a entrenar.</h3>
      </div>
    </div>
  );
};

export default Planes;
