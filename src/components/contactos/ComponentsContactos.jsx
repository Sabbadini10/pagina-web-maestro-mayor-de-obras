import React from "react";
import "./Contactos.css";

function Contactos() {
  return (
    <div>
      <h1 className="main-titulo d-flex justify-content-center mt-1">
        Contacto
      </h1>
      <div className="Contactos m-3 d-flex justify-content-center">
        <form class="contacto-formulario m-3 bg-dark bg-opacity-75 p-3 border border-2 rounded">
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label text-light">
              Nombre
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput"
              placeholder="Join Doin"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label text-light">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="JoinDoin@example.com"
            />
          </div>
          <div class="mb-3">
            <label
              for="exampleFormControlTextarea1"
              class="form-label text-light"
            >
              Mensaje
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="contactos-boton-contenedor col-auto d-flex justify-content-center">
            <button type="submit" class="contactos-boton btn btn-primary mb-3">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactos;
