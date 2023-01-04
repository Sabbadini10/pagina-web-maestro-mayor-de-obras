import React from 'react';
import "../../components/main/Main.css"


function ImagenRender(props){
    return(
      <div className="render-contenedor-imagen-render">
      <img className="render-imagen-Render d-flex" src={props.src} alt="Imagen Render" />
      </div>
    )
}

export default ImagenRender;