import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Aldi() {
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
              src="assets/css/image/aldi.jpg"
              alt="..."
              width="40%"
              height="40%"
            />
            <div class="my-auto mx-5 flex-wrap">
              <h3>Aldi </h3>
              <p>NIM : 412021022</p>
              <p>Angkata : 2021</p>
              <p>Email : aldi.412021022@civitas.ukrida.ac.id</p>
              <p>Tempat,Tgl : Jakarta, 07-04-2003</p>
              <p>Agama : Ateis</p>
              <a href="https://www.instagram.com/altode_dy">
                <p>Instagram : @altode_dy</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
