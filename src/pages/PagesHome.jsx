import React from "react";
import Footer from "../components/footer/ComponentsFooter";
import ComponentsHome from "../components/home/ComponentsHome";
import Navbar from "../components/navbar/ComponentsNavbar";

function PagesHome() {
  return (
    <div className="PagesHome">
      <Navbar />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <ComponentsHome />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PagesHome;
