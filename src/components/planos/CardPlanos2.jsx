import React from "react";
import "./Planos.css";

function CardPlanos2(props) {
  return (
    <>
      <div className="cardPlanos2 card p-2 bg-dark bg-opacity-75 mb-3">
        <div className="contenedor-cardPlanos2 d-flex flex-row gap-2">
          <div className="cardPlanos-imagen2 p-2">
            <img
              className="plano-imagen-planos1"
              src={props.src}
              alt="imagen planos"
            />
          </div>
          <div className="card-body text-light">
            <p className="cardplanos-parrafo2">{props.descripcion}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPlanos2;
