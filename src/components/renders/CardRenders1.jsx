import React from 'react';
import './Renders.css';


function CardRenders1(props) {
  return (
  <>
    <div className="cardRenders1 card bg-transparent mb-3" >
    <div className='contenedor-cardRenders2 d-flex flex-row gap-2'>
    <div className="card-body text-light">
    <p className='cardRender-parrafo1'>{props.descripcion}</p>
  </div>
  <div className='cardRenders-imagen1 p-2'>
    <img className='render-imagen-Render1' src={props.src} alt='imagen render' />
  </div>
    </div>
   
  </div>
</>
  )
}


export default CardRenders1;