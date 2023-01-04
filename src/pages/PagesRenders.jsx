import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsRenders from '../components/renders/ComponentsRenders'


function PagesRenders() {
  
  return (
    <div className='PagesRenders'>
      <Navbar />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <ComponentsRenders />
      </div>
    </div>
    <Footer />
    </div>
    
  )
}

export default PagesRenders