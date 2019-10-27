import React from "react";

export default function Footer() {
  return (
    <div>
      <link
        href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
        rel="stylesheet"
      />
      <footer class="pt-5 pb-4" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 class="mb-4 font-weight-bold">ABOUT US</h5>
              <p class="mb-4">Etiam laoreet in ex quis efficitur.</p>
              <ul class="f-address">
                <li>
                  <div class="row">
                    <div class="col-1">
                      <i class="fas fa-map-marker"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="font-weight-bold mb-0">Address:</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-1">
                      <i class="far fa-envelope"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="font-weight-bold mb-0">Have any questions?</h6>
                      <p>
                        <a href="#">Support@userthemes.com</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-1">
                      <i class="fas fa-phone-volume"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="font-weight-bold mb-0">Address:</h6>
                      <p>
                        <a href="#">+XX (0) XX XX-XXXX-XXXX</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 class="mb-4 font-weight-bold">FRESH TWEETS</h5>
              <ul class="f-address">
                <li>
                  <div class="row">
                    <div class="col-1">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <div class="col-10">
                      <p class="mb-0">
                        <a href="#">@userthemesrel </a> HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-1">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <div class="col-10">
                      <p class="mb-0">
                        <a href="#">@userthemesrel </a> HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-1">
                      <i class="fab fa-twitter"></i>
                    </div>
                    <div class="col-10">
                      <p class="mb-0">
                        <a href="#">@userthemesrel </a> HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 class="mb-4 font-weight-bold">LATEST UPDATES</h5>
              <ul class="recent-post">
                <li>
                  <label class="mr-3">
                    28 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
                <li>
                  <label class="mr-3">
                    29 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
                <li>
                  <label class="mr-3">
                    30 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 class="mb-4 font-weight-bold">CONNECT WITH US</h5>
              <ul class="social-pet mt-4">
                <li>
                  <a
                    href="https://www.facebook.com/pg/Perceptio-SAS-1061087157310289/photos/?ref=page_internal"
                    title="facebook"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/perceptio-s-a-s-/"
                    title="linkedin"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/perceptios.a.s/?hl=es-la"
                    title="instagram"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <section class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ">
              <div class="text-center text-white">
                &copy; 2018 Your Company. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
