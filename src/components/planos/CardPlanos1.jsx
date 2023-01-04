import React from 'react';
import './Planos.css';


function CardPlanos1(props) {
  return (
  <>
    <div className="cardPlanos1 card bg-transparent mb-3" >
    <div className='contenedor-cardPlanos1 d-flex flex-row gap-2'>
    <div className="card-body text-light">
    <p className='cardRender-parrafo1'>{props.descripcion}</p>
  </div>
  <div className='cardPlanos-imagen1 p-2'>
    <img className='render-imagen-Render1' src={props.src} alt='imagen render' />
  </div>
    </div>
   
  </div>
</>
  )
}


export default CardPlanos1;


