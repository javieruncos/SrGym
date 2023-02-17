import React from 'react';
import { Link } from 'react-router-dom';

const PlanBlack = () => {
    return (
        <div className="container mt-5">
      <h1 className="ColorYellow display-4">BLACK</h1>
      <div className="mt-5  smartDiv text-center">
        <h2 className="mt-4">ELEGISTE EL PLAN BLACK</h2>
        <p className="fs-6">
          Con el plan Smart podés entrenar en la sede seleccionada sin
          restricción de horario. En este plan no tienes multa por cancelación.
        </p>
        <div className="row mx-auto fw-bold mt-5 smartDiv">
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center mt-4">
            <span className="fs-5">✅ PLAN BLACK</span>
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center flex-column mt-4">
            <span>Inscripción</span>
            <span>$0.00</span>
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center flex-column mt-4">
            <span>Plazo</span>
            <span>12 meses</span>
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center mt-4">
            <span className="display-6">$ 5199, 00</span>
          </div>
          <p className='mt-4'>Con el plan Black podés entrenar en cualquiera de nuestras sedes sin restricción de horario. En este plan el contrato es por 12 meses.</p>
        </div>
        <div className="row mx-auto fw-bold mt-5 smartDiv2">
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center flex-column mt-4">
            <span className="fs-5">PLAN SMART</span>
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center flex-column mt-4">
            <span>Matrícula anual</span>
            <span>$ 4.599/año</span>
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center flex-column mt-4">
            <span>Plazo</span>
            <span>No tiene </span>
          </div>
          <div className="col-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-center mt-4">
            <span className="display-6">$ 4599,00</span>
          </div>
          <p className="mt-1">Con el plan Smart podés entrenar en la sede seleccionada sin restricción de horario. En este plan no tienes multa por cancelación.</p>
        </div>
        <div className="mt-5">
         <a href='/error' className="btn btn-dark">Continuar</a>
        </div>
      </div>
    </div>
    );
};

export default PlanBlack;