import React from "react";
import "./Planos.css";
import CardPlanos1 from "./CardPlanos1";
import CardPlanos2 from "./CardPlanos2";
import Planos1 from "../../imagenes/proyectos/anteproyecto-terminado.jpg";
import Planos2 from "../../imagenes/proyectos/cocina-ejemplo.jpg";
import Planos3 from "../../imagenes/proyectos/proyecto-aberturas.jpg";
import Planos4 from "../../imagenes/proyectos/proyecto-medidas-1.jpg";
import Planos5 from "../../imagenes/proyectos/proyecto-medidas-2.jpg";
import Planos6 from "../../imagenes/proyectos/proyecto-medidas-3.jpg";
import Planos7 from "../../imagenes/proyectos/proyecto-medidas-4.jpg";
import Planos8 from "../../imagenes/proyectos/proyecto-techo.jpg";

function Planos() {
  return (
    <div className="Planos">
      <h1 className="titulo-plano d-flex justify-content-center mt-1">Planos</h1>
      <CardPlanos2
        src={Planos1}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos2}
      />
      <CardPlanos2
        src={Planos3}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos4}
      />
      <CardPlanos2
        src={Planos5}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos6}
      />
      <CardPlanos2
        src={Planos7}
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      />
      <CardPlanos1
        descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        src={Planos8}
      />
    </div>
  );
}

export default Planos;
