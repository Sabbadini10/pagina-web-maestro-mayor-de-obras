import React from 'react'
import errorImage from '../../imagenes/hommer-404.jpg'
import ImagenError from '../imagen/ImagenError';
import "./NoPages.css"

function ComponentsNoPage() {
  return (
    <div>
        <div>
          <ImagenError src={errorImage} alt="Card image cap"  />
      </div>

      <div>
        <h1 className='error-titulo'>Pagina no encontrada</h1>
      </div>
    </div>
    
     
  )
}

export default ComponentsNoPage;