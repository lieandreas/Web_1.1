import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Fantasi() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
        <section class="p-2 p-md-2 text-center text-lg-start shadow-1-strong">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-body m-1">
                  <div class="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-2 mb-lg-0">
                      <img
                        src="assets/css/image/about-me.jpg"
                        class="img-fluid shadow-1"
                        alt="..."
                        width="200"
                        height="300"
                      />
                    </div>
                    <div class="col-lg-8">
                      <p class="text-muted fw-bold my-5">
                        The Privilege (Das Privileg) merupakan film bergenre
                        Thriller-Supranatural yang mengisahkan seorang remaja
                        beserta teman-temannya mengungkap konspirasi gelap
                        sembari menemukan kejadian supranatural yang aneh. Film
                        The Privilege memadukan antara unsur supranatural dengan
                        unsur medis didalamnya. Dimana obat-obat yang dikonsumsi
                        oleh manusia berhubungan dengan konspirasi sekte
                        penyembah iblis.
                      </p>
                      <p class="fw-bold lead mb-2">
                        <strong>THE PRIVILEGE</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="p-2 p-md-2 text-center text-lg-start shadow-1-strong">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <div class="card">
                <div class="card-body m-1">
                  <div class="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center mb-1 mb-lg-0">
                      <img
                        src="assets/css/image/texas.jpg"
                        class="img-fluid shadow-1"
                        alt="..."
                        width="200"
                        height="300"
                      />
                    </div>
                    <div class="col-lg-8">
                      <p class="text-muted fw-bold my-5">
                        Texas Chainsaw Massacre merupakan film yang digarap
                        dalam versi terbaru, dari serial berjudul sama yang
                        tayang perdana pada 1974 lalu. Disutradarai oleh David
                        Blue Garcia, judul satu ini menampilkan jajaran pemain
                        yang terdiri dari Sarah Yarkin, Elsie Fisher, Mark
                        Burnham, Jacob Latimore, Moe Dunford, Olwen Fouéré,
                        Alice Krige, Jessica Allain, dan Nell Hudson.
                        Menampilkan aksi pembunuhan berdarah yang dilakukan
                        seseorang dengan mesin gergajinya, judul satu ini akan
                        membawamu pada sederet peristiwa mengerikan tak
                        terlupakan.
                      </p>
                      <p class="fw-bold lead mb-2">
                        <strong>TEXAS CHAINSAW MASSACRE</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}
