import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Titin() {
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
              src="assets/css/image/titin.jpeg"
              alt="..."
              width="40%"
              height="40%"
            />
            <div class="my-auto mx-auto flex-wrap">
              <h1>Titin</h1>
              <p>NIM : 412018036</p>
              <p>Angkata : 2018</p>
              <p>Email : titin.2018tin036@civitas.ukrida.ac.id</p>
              <p>Tempat,Tgl : saumlaki,17februari2001</p>
              <p>Agama : Kristen Protestan</p>
              <a href="https://www.instagram.com/febriani_besitimur">
                <p>Instagram : @febriani_besitimur</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

