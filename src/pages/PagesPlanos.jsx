import React from "react";
import ComponentsPlanos from "../components/planos/ComponentsPlanos";
import Footer from "../components/footer/ComponentsFooter";
import Navbar from "../components/navbar/ComponentsNavbar";

function PagesPlanos() {
  return (
    <div className="PagesPlanos">
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <ComponentsPlanos />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PagesPlanos;
