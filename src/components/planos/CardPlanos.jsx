import React from 'react'
import './Planos.css';


function CardPlanos(props) {
  return (
    <div className='CardPlanos d-flex justify-content-center '>
    <div className='cardPlanos-caja-1'>
    <div class="card-curso card  d-flex mb-2 bg-transparent">
    <img className="Imagen-titulo card-img-top d-flex align-items-end p-3" src={props.src} alt="Imagen Perfil" />
    <a href={props.link} class="btn btn-dark mt-1">Ir</a>
  </div>
  </div>
</div>
  )
}

export default CardPlanos;


