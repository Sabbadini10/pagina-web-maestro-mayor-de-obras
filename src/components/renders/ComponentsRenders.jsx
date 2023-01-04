import React from "react";
import "./Renders.css";
import CardRenders1 from "./CardRenders1";
import CardRenders2 from "./CardRenders2";
import Render1 from "../../imagenes/renders/render3.jpg";
import Render2 from "../../imagenes/renders/render2.jpeg";

function Renders() {
  return (
    <div className="Renders">
      <h1 className="main-titulo d-flex justify-content-center mt-1">
        Renders
      </h1>
      <div className="contenedor-Renders">
        <CardRenders1
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={Render1}
        />

        <CardRenders2
          src={Render2}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <CardRenders1
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={Render1}
        />

        <CardRenders2
          src={Render2}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <CardRenders1
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={Render1}
        />

        <CardRenders2
          src={Render2}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <CardRenders1
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={Render1}
        />

        <CardRenders2
          src={Render2}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
}

export default Renders;
