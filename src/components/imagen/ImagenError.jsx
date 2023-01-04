import React from 'react';


function ImagenError(props){
    return(
      <div>
      <img className="imagen-error card-img-top d-flex aling-items-end" src={props.src} alt="Imagen Error" />
      </div>
    )
}

export default ImagenError;