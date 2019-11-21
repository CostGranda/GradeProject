import React from "react";

export default function Footer() {
  return (
    <div>
      <link
        href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
        rel="stylesheet"
      />
      <footer className="pt-5 pb-4" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">ABOUT US</h5>
              <ul className="f-address">
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-map-marker"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Address:</h6>
                      <p>Cra. 43b #1171, Medellín, Antioquia</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">
                        Have any questions?
                      </h6>
                      <p>
                        <a href="#">perceptio@perceptio.net</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Phone:</h6>
                      <p>
                        <a href="#">+57 (4) 4448800</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">OUR SERVICES</h5>
              <ul className="f-address">
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/servicios/analitica/">Analytics</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/servicios/fabrica-de-software/">Software Factory</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/servicios/movilidad/">Mobility</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/servicios/innovacion/">Innovation</a>
                    </p>
                  </div>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/servicios/licenciamiento-sap/">SAP Licensing</a>
                    </p>
                  </div>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/servicios/outsourcing/">Outsourcing</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">WORK WITH US</h5>
              <ul className="f-address">
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/vacantes/">Vacancies</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/por-que-perceptio/">Why PERCEPTIO</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/plan-de-beneficios/">Benefits plan</a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="col-10">
                    <p className="mb-0">
                      <a href="https://www.perceptio.co/testimoniales/">Testimonials</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">CONNECT WITH US</h5>
              <ul className="social-pet mt-4">
                <li>
                  <a
                    href="https://www.facebook.com/pg/Perceptio-SAS-1061087157310289/photos/?ref=page_internal"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/perceptio-s-a-s-/"
                    title="Linkedin"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/perceptios.a.s/?hl=es-la" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="text-center text-white">
                &copy; 2019 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
