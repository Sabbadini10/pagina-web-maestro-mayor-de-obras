import React from 'react';
import './Contactos.css';

function CardContactos(props) {
  return (
  <div className='contenedor-card-contactos'>
    <div class="card-contactos card d-flex mb-3 rounded bg-transparent">
  <div class="card-body d-flex  rounded align-items-center justify-content-center">
  <img className="contactos-imagen card-img-top d-flex" src={props.src} alt="Imagen Perfil"  />
  </div>
  <h5 class="card-title text-center text-light">{props.name}</h5>
  </div>
</div>
  )
}

export default CardContactos;
