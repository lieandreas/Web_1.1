import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Jason() {
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
              src="assets/css/image/antoni.jpg"
              alt="..."
              width="40%"
              height="40%"
            />
            <div class="my-auto mx-5 flex-wrap">
              <h1>Jason Antony</h1>
              <p>NIM : 412021010</p>
              <p>Angkata : 2021</p>
              <p>Email : jason.412021010@civitas.ukrida.ac.id</p>
              <p>Tempat,Tgl : 2 December 2002</p>
              <p>Agama : Kristen</p>
              <a href="https://www.instagram.com/antonny_81">
                <p>Instagram : @antonny_81 </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
