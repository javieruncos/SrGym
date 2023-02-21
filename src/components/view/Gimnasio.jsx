import React from "react";
import "../../styles/Gimnasio.css";
import { Link } from "react-router-dom";
const Gimnasio = () => {
  return (
    <div>
      <div className="portadaGym container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2995.173476962689!2d-65.18252832126352!3d-26.780043532388387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1675956941361!5m2!1ses-419!2sar"
          style={{ height: 450, border: 0 }}
          className="w-100"
          frameBorder="0"
          title="mapa"
        ></iframe>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="cardGym">
              <div className="divUbicacion container d-flex ">
                <h4 className="text-light">San Miguel de Tucuman </h4>
                <span className="mt-1 ms-2">
                  <i className="bi bi-geo-alt text-light "></i>
                </span>
              </div>
              <div>
                <img
                  src="https://pictures.smartfit.com.br/9871/big/WhatsApp_Image_2021-09-25_at_11.47.31.jpeg?1635797572"
                  alt="sucursal"
                  className="w-100"
                />
                <div className="planesCard d-flex justify-content-center gap-4">
                  <div className="d-flex  justify-content-center flex-column text-center border-end px-3 smart">
                    <Link href="/smart" className="LinkCategorias">
                      PLAN SMART
                    </Link>
                    <span>$4599</span>
                  </div>
                  <div className="d-flex  justify-content-center flex-column text-center">
                    <Link href="/black" className="LinkCategorias">
                      PLAN BLACK
                    </Link>
                    <span>$5199</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div>
              <div>
                <div className="cardGym">
                  <div className="divUbicacion container d-flex ">
                    <h4 className="text-light">Yerba Buena</h4>
                    <span className="mt-1 ms-2">
                      <i className="bi bi-geo-alt text-light "></i>
                    </span>
                  </div>
                  <div>
                    <img
                      src="https://pictures.smartfit.com.br/7185/big/1_ok.jpg?1575639464"
                      alt="sucursal"
                      className="w-100"
                    />
                    <div className="planesCard d-flex justify-content-center gap-4">
                      <div className="d-flex  justify-content-center flex-column text-center border-end px-3 smart">
                        <Link href="/smart" className="LinkCategorias">
                          PLAN SMART
                        </Link>
                        <span>$4599</span>
                      </div>
                      <div className="d-flex  justify-content-center flex-column text-center">
                        <Link href="/black" className="LinkCategorias">
                          PLAN BLACK
                        </Link>
                        <span>$5199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div>
              <div>
                <div className="cardGym">
                  <div className="divUbicacion container d-flex ">
                    <h4 className="text-light">Las Talitas</h4>
                    <span className="mt-1 ms-2">
                      <i className="bi bi-geo-alt text-light "></i>
                    </span>
                  </div>
                  <div>
                    <img
                      src="https://pictures.smartfit.com.br/7145/big/a_2.jpg?1575651369"
                      alt="sucursal"
                      className="w-100"
                    />
                    <div className="planesCard d-flex justify-content-center gap-4">
                      <div className="d-flex  justify-content-center flex-column text-center border-end px-3 smart">
                        <Link href="/smart" className="LinkCategorias">
                          PLAN SMART
                        </Link>
                        <span>$4599</span>
                      </div>
                      <div className="d-flex  justify-content-center flex-column text-center">
                        <Link href="/black" className="LinkCategorias">
                          PLAN BLACK
                        </Link>
                        <span>$5199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-4">
            <div>
              <div>
                <div className="cardGym">
                  <div className="divUbicacion container d-flex ">
                    <h4 className="text-light">Monteros</h4>
                    <span className="mt-1 ms-2">
                      <i className="bi bi-geo-alt text-light "></i>
                    </span>
                  </div>
                  <div>
                    <img
                      src="https://pictures.smartfit.com.br/7177/big/1.jpg?1575636660"
                      alt="sucursal"
                      className="w-100"
                    />
                    <div className="planesCard d-flex justify-content-center gap-4">
                      <div className="d-flex  justify-content-center flex-column text-center border-end px-3 smart">
                        <Link href="/smart" className="LinkCategorias">
                          PLAN SMART
                        </Link>
                        <span>$4599</span>
                      </div>
                      <div className="d-flex  justify-content-center flex-column text-center">
                        <Link href="/black" className="LinkCategorias">
                          PLAN BLACK
                        </Link>
                        <span>$5199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-4">
            <div>
              <div>
                <div className="cardGym">
                  <div className="divUbicacion container d-flex ">
                    <h4 className="text-light">Concepcion</h4>
                    <span className="mt-1 ms-2">
                      <i className="bi bi-geo-alt text-light "></i>
                    </span>
                  </div>
                  <div>
                    <img
                      src="https://pictures.smartfit.com.br/8502/big/IMG-20201111-WA0066.jpg?1605135575"
                      alt="sucursal"
                      className="w-100"
                    />
                    <div className="planesCard d-flex justify-content-center gap-4">
                      <div className="d-flex  justify-content-center flex-column text-center border-end px-3 smart">
                        <Link href="/smart" className="LinkCategorias">
                          PLAN SMART
                        </Link>
                        <span>$4599</span>
                      </div>
                      <div className="d-flex  justify-content-center flex-column text-center">
                        <Link href="/black" className="LinkCategorias">
                          PLAN BLACK
                        </Link>
                        <span>$5199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 mt-4">
            <div>
              <div>
                <div className="cardGym">
                  <div className="divUbicacion container d-flex ">
                    <h4 className="text-light">Tafi Viejo</h4>
                    <span className="mt-1 ms-2">
                      <i className="bi bi-geo-alt text-light "></i>
                    </span>
                  </div>
                  <div>
                    <img
                      src="https://pictures.smartfit.com.br/8500/big/WhatsApp_Image_2020-11-09_at_7.35.50_AM.jpeg?1604918322"
                      alt="sucursal"
                      className="w-100"
                    />
                    <div className="planesCard d-flex justify-content-center gap-4">
                      <div className="d-flex  justify-content-center flex-column text-center border-end px-3 smart">
                        <Link href="/smart" className="LinkCategorias">
                          PLAN SMART
                        </Link>
                        <span>$4599</span>
                      </div>
                      <div className="d-flex  justify-content-center flex-column text-center">
                        <Link href="/black" className="LinkCategorias">
                          PLAN BLACK
                        </Link>
                        <span>$5199</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 text-light">
          <h2>Visitanos en cualquiera de nuestras sucursales</h2>
        </div>
      </section>
    </div>
  );
};

export default Gimnasio;
