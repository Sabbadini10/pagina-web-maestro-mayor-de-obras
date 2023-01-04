import React from 'react';
import "../../components/main/Main.css"


function ImagenPerfil(props){
    return(
      <div className="">
      <img className="main-imagen-perfil d-flex" src={props.src} alt="Imagen Perfil" />
      </div>
    )
}

export default ImagenPerfil;