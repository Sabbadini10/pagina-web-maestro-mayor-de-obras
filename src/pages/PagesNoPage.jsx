import React from 'react'
import Footer from '../components/footer/ComponentsFooter'
import Navbar from '../components/navbar/ComponentsNavbar'
import ComponentsNoPage from '../components/NoPage/ComponentsNoPage'



function PagesNoPage() {
  
  return (
   <div>
     <Navbar />
    <div className='NoPages-error'>
        <ComponentsNoPage />
    </div>
    <Footer />
   </div>
  )
}

export default PagesNoPage