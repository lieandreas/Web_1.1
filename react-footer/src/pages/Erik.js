import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Erik() {
  return (
    <React.Fragment>
      <Navbar />
      <div
        style={{
          backgroundImage: "url(assets/css/image/bg2.png)",
        }}
      >
        <div class="container-fluid">
          <div class="rounded d-flex flex-wrap">
            <img
              src="assets/css/image/Erik.jpg"
              alt="..."
              width="40%"
              height="40%"
            />
            <div class="my-auto mx-5 flex-wrap">
              <h1>Erik Masduki Jonathan Sitorus</h1>
              <p>NIM : 412021016</p>
              <p>Angkata : 2021</p>
              <p>Email : erik.412021016@civitas.ukrida.ac.id</p>
              <p>Tempat,Tgl : Jakarta, 10 Oktober 2003</p>
              <p>Agama : Kristen</p>
              <a href="https://www.instagram.com/erik_m_j_s">
                <p>Instagram : @erik_m_j_s</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
