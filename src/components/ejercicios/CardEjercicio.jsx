import React from "react";
import "../../styles/ComponentePectoral.css";
import { Table } from "react-bootstrap";

const CardEjercicio = ({ ejercicios }) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-6">
        <div className=" mt-5">
          <img src={ejercicios.image} alt="ejercicio" className="w-100" />
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className=" mt-5">
          <div>
            <div>
              <Table>
                <thead>
                  <tr className="text-light">
                    <th>Nombre</th>
                    <th>Series</th>
                    <th>Repeticiones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="ColorYellow">
                    <td >{ejercicios.ejercicio}</td>
                    <td>{ejercicios.series}</td>
                    <td>{ejercicios.repeticiones}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="text-light">
                <h5>Como realizar el ejercicio</h5>
                <p>{ejercicios.tecnica}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEjercicio;
