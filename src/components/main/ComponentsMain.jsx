import React from "react";
import "./Main.css";
import ImagenCard from "../../imagenes/proyectos/proyecto1.jpg";
import ImagenHome from "../imagen/ImagenHome";

function Main() {
  return (
    <div className="Main">
      <h3 className="text-center mt-3">Portaforlio Rodrigo Franco</h3>
      <h4 className="text-center mt-3">Sobre Mi</h4>
      <p class="text-lg-start">
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        corrupti.
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        corrupti.
      </p>
      <h4 className="text-center mt-3">Conforme a Obra</h4>
      <div className="d-flex mt-1 flex-column align-items-center justify-content-center">
        <div
          className="card p-2 bg-dark bg-opacity-75 "
          style={{ width: "18rem" }}
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
          className="card mt-3 p-2 bg-dark bg-opacity-75 "
          style={{ width: "18rem" }}
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
          className="card p-2 bg-dark bg-opacity-75 mt-3"
          style={{ width: "18rem" }}
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
          className="card mt-3 mb-3 p-2 bg-dark bg-opacity-75 "
          style={{ width: "18rem" }}
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
    </div>
  );
}

export default Main;
