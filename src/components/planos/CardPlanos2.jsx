import React from 'react';
import './Planos.css';


function CardPlanos2(props) {
  return (
  <>
    <div className="cardPlanos2 card bg-transparent mb-3" >
    <div className='contenedor-cardPlanos2 d-flex flex-row gap-2'>
    
    <div className='cardPlanos-imagen2 p-2'>
    <img className='render-imagen-Render1' src={props.src} alt='imagen render' />
  </div>
  <div className="card-body text-light">
  <p className='cardRender-parrafo2'>{props.descripcion}</p>
  </div>
    </div>
   
  </div>
</>
  )
}


export default CardPlanos2;