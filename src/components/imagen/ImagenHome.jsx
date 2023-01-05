import React from "react";
import "../../components/main/Main.css";

function ImagenHome(props) {
  return (
    <div className="home-contenedor-imagen d-flex justify-content-center">
      <img className="home-imagen " src={props.src} alt="Imagen home" />
    </div>
  );
}

export default ImagenHome;
