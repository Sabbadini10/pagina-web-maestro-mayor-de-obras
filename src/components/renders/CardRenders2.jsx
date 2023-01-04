import React from 'react';
import './Renders.css';


function CardRenders2(props) {
  return (
  <>
    <div className="cardRenders2 card bg-transparent mb-3" >
        <div className='contenedor-cardRenders2 d-flex flex-row gap-2'>
        <div className='cardRenders-imagen2 p-2'>
    <img className='render-imagen-Render2' src={props.src} alt='imagen render' />
  </div>
  <div className="card-body text-light">
  <p className='cardRender-parrafo2'>{props.descripcion}</p>
  </div>
        </div>
    
  </div>
</>
  )
}


export default CardRenders2;