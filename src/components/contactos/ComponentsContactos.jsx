import React from 'react'
import './Contactos.css'

import CardContactos from './CardContactos';


function Contactos() {
  return (
    <div className='Skill'>
      <h1 className='main-titulo d-flex justify-content-center '>Contactos</h1>
      <div className='contenedor-Contactos  row row-lg-3 row-md-2 row-sm-1 mt-3'>
      <div className='cardContactos-caja-1'>
    <CardContactos 
    src=''
    name="Express.js"
   />
   </div>
   <div className='cardContactos-caja-1'>
<CardContactos 
    src=''
    name="CSS3"
   />
    </div>
    <div className='cardContactos-caja-1'>
    <CardContactos
src=''
name="Boostrap" />
</div>
<div className='cardContactos-caja-1'>
<CardContactos 
src=''
name="HTML5"
   />
   </div>
<div className='cardContactos-caja-1'>
<CardContactos
src=''
name="Javascript" />
</div>
<div className='cardContactos-caja-1'>
<CardContactos 
src=''
name="MySQL"
   />
   </div>
<div className='cardContactos-caja-1'>
    <CardContactos
src=''
name="Node.js" />
</div>
<div className='cardContactos-caja-1'>
<CardContactos 
src=''
name="React.js"
   />
</div>
<div className='cardContactos-caja-1'>
<CardContactos
src=''
name="Sequelize" />
</div>
<div className='cardContactos-caja-1'>
<CardContactos 
src=''
name="Git" />
</div>
<div className='cardContactos-caja-1'>
<CardContactos 
src=''
name="Slack" />
</div>
<div className='cardContactos-caja-1'>
<CardContactos 
src=''
name="Trello" />
</div>
<div className='cardContactos-caja-1'>
</div>
      </div>
    
</div>
  )
}

export default Contactos;

