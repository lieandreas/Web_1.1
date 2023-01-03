import React from "react";
import "./App.css";
import Footer from "./pages/Footer";
import Index from "./pages/Andreas";
import Navbar from "./pages/Navbar";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Index />

      <Footer />
    </div>
  );
};

export default App;
