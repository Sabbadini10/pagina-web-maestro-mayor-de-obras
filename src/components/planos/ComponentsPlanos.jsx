import React from "react";
import "./Planos.css";
import CardPlanos1 from "./CardPlanos1";
import CardPlanos2 from "./CardPlanos2";
import Planos1 from "../../imagenes/proyectos/proyecto1.jpg";
import Planos2 from "../../imagenes/proyectos/proyecto2.jpg";

function Planos() {
  return (
    <div className="Planos">
      <h1 className="titulo-plano d-flex justify-content-center mt-1">Planos</h1>
      <CardPlanos2
        src={Planos2}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos1}
      />
      <CardPlanos2
        src={Planos2}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos1}
      />
      <CardPlanos2
        src={Planos2}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos1}
      />
      <CardPlanos2
        src={Planos2}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos1}
      />
    </div>
  );
}

export default Planos;
