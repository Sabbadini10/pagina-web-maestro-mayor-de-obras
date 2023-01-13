import React from "react";
import "./Renders.css";
import CardRenders1 from "./CardRenders1";
import CardRenders2 from "./CardRenders2";
import Render1 from "../../imagenes/renders/CASATERMINADA1.png";
import Render2 from "../../imagenes/renders/CASATERMINADA2.png";
import Render3 from "../../imagenes/renders/CASATERMINADA3.png";
import Render4 from "../../imagenes/renders/CASATERMINADA4.png";
import Render5 from "../../imagenes/renders/CASATERMINADA5.png";
import Render6 from "../../imagenes/renders/CASATERMINADA6.png";
import Render7 from "../../imagenes/renders/CASATERMINADA7.png";
import Render8 from "../../imagenes/renders/CASATERMINADA8.png";

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
          src={Render3}
        />

        <CardRenders2
          src={Render4}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
        <CardRenders1
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={Render5}
        />

        <CardRenders2
          src={Render6}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />

        <CardRenders1
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          src={Render7}
        />

        <CardRenders2
          src={Render8}
          descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
}

export default Renders;
