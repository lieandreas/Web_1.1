import React from "react";

export default function Index() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <h1>Kelompok 2</h1>
        <div className="border-top">
          <p>Kelompok ini terdiri dari:</p>
          <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div className="col">
              <div className="p-2">
                <a href="Andreas.js">
                  <img
                    src="assets/css/image/Andreas.jpeg"
                    className="card-img-top"
                    alt="..."
                    width="200"
                  />
                  <p>Andreas</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <a href="Aldi.php">
                  <img
                    src="assets/css/image/aldi.jpg"
                    className="card-img-top"
                    alt="..."
                    width="200"
                  />
                  <p>Aldi</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <a href="Erik.php">
                  <img
                    src="assets/css/image/Erik.jpg"
                    className="card-img-top"
                    alt="..."
                    width="200"
                  />
                  <p>Erik</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <a href="Jason.php">
                  <img
                    src="assets/css/image/antoni.jpg"
                    className="card-img-top"
                    alt="..."
                    width="200"
                  />
                  <p>Jason</p>
                </a>
              </div>
            </div>
            <div className="col">
              <div className="p-2">
                <a href="Titin.php">
                  <img
                    src="assets/css/image/titin.jpeg"
                    className="card-img-top"
                    alt="..."
                    width="200"
                  />
                  <p>Titin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <h1>Penjelasan</h1>
        <div className="border-top">
          
        </div>
      </div>
    </React.Fragment>
  );
}
