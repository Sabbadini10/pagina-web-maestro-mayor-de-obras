import React from 'react';
import './Renders.css';

function CardRenders(props) {
  return (
  <>
    <div className="cardRenders card bg-transparent mb-3" >
    <div className="card-body text-light">
    <h5 className="card-title text-center text-light">{props.name}</h5>
    <p className="cardRenders-parrafo title text-start text-light">Lenguajes: {props.lenguajes}</p>
  <p className="cardRenders-parrafo title text-start text-light">Descripción: {props.descripcion}</p>
  <p className="cardRenders-parrafo title text-start text-light">Deploy: <a href={props.deploy} class="text-light mt-1">Link Deploy</a></p>
  <br/>
  <p className="cardRenders-parrafo title text-start text-light">Git-Hub: <a href={props.github} class="text-light mt-1">Link Git-Hub</a></p>
  </div>
  </div>
</>
  )
}


export default CardRenders;