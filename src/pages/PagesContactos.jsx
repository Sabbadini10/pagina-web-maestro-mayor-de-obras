import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsContactos from '../components/contactos/ComponentsContactos'


function PagesContactos() {
  
  return (
    <div className='PagesContactos'>
      <Navbar />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <ComponentsContactos />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default PagesContactos