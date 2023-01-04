import React from 'react';
import "../navbar/Navbar.css"


function ImagenLogo(props){
    return(
      
      <img className="navbar-imagen-logo" src={props.src} alt='imagen Logo'/>
     
    )
}

export default ImagenLogo;