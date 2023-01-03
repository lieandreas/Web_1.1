import React from "react";
import Button from "./Button";

export default function Andreas() {
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "url(assets/css/image/bg2.png)",
        }}
      >
        <div class="container-fluid">
          <div class="rounded d-flex flex-wrap">
            <img
              src="assets/css/image/Andreas.jpeg"
              alt="..."
              width="40%"
              height="40%"
            />
            <div class="my-auto mx-auto flex-wrap">
              <h1>Andreas</h1>
              <p>NIM : 412021003</p>
              <p>Angkata : 2021</p>
              <p>Email : andreas.412021003@civitas.ukrida.ac.id</p>
              <p>Tempat,Tgl : Jakarta 2 april 2003</p>
              <p>Agama : Kristen katolik</p>
              <a href="https://www.instagram.com/Andreas_vox">
                <p>Instagram : @Andreas_vox</p>
              </a>
              <Button>
                Halo semua nama saya Andreas saya merupakan Mahasiswa Informatika UKRIDA angkatan 2021. 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
