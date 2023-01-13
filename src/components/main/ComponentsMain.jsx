import React from "react";
import "./Main.css";
import ImagenCard from "../../imagenes/proyectos/anteproyecto-terminado.jpg";
import ImagenHome from "../imagen/ImagenHome";

function Main() {
  return (
    <div className="Main">
      <h3 className="main-titulo text-center mt-3">Portaforlio Rodrigo Franco</h3>
      <h4 className="main-subtitulo-titulo text-center mt-3">Sobre Mi</h4>
      <p class="main-parrafo text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        corrupti.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        corrupti.
      </p>
      <h4 className="main-subtitulo-titulo text-center mt-3">Conforme a Obra</h4>
      <div className="main-contenedor-principal">
      <div className="main-contenedor-mobile d-flex mt-1 flex-column align-items-center justify-content-center">
        
        <div
          className="contenedor-card card p-2 bg-dark bg-opacity-75 mt-3"
        >
          <ImagenHome className="p-1" src={ImagenCard} />
          <div className="card-body">
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="contenedor-card card mt-3 mb-3 p-2 bg-dark bg-opacity-75 "
        >
          <ImagenHome src={ImagenCard} />
          <div className="card-body">
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
        
      <div className="contenedor-main-tablet">
        <div
          className="contenedor-card card mt-3 p-2 bg-dark bg-opacity-75 "
        >
          <ImagenHome src={ImagenCard} />
          <div className="card-body">
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="contenedor-card card p-2 bg-dark bg-opacity-75 mt-3"
        >
          <ImagenHome className="p-1" src={ImagenCard} />
          <div className="card-body">
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
        
        <div className="contenedor-main-escritorio">
        <div
          className="contenedor-card card mt-3 p-2 bg-dark bg-opacity-75 "
        >
          <ImagenHome src={ImagenCard} />
          <div className="card-body">
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="contenedor-card card p-2 bg-dark bg-opacity-75 mt-3"
        >
          <ImagenHome className="p-1" src={ImagenCard} />
          <div className="card-body">
            <p className="card-text text-light">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
        </div>
      </div>
  );
}

export default Main;
