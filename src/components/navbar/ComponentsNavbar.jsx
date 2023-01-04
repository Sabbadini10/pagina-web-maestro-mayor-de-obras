import React from 'react'
import './Navbar.css'
import { Outlet, Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className='Navbar'>
      <nav className="navbar bg-dark data-bs-theme='dark' border border-dark-subtle rounded-bottom">
    <ul className="navbar justify-content-around align-items-center gap-2 ">
    <li className="nav-item d-flex flex-row align-items-center gap-1">
      <span className='Navbar-span-icono text-light'><i class="fa-solid fa-house"></i></span>
        <Link className="nav-link text-light" to='/'>Home</Link>
        </li>
          <li className="nav-item text-light d-flex flex-row align-items-center gap-1" >
            <span className='Navbar-span-icono text-light'><i class="fa-solid fa-folder-closed"></i></span>
                <Link className="nav-link text-light" to='/planos'>Planos</Link>
          </li>
          <li className="nav-item text-light d-flex flex-row align-items-center gap-1" >
          <span className='Navbar-span-icono text-light'><i class="fa-solid fa-file-image"></i></span>
            <Link className="nav-link text-light"  to='/renders'>Renders</Link>
          </li>
          <li className="nav-item text-light d-flex flex-row align-items-center gap-1" >
            <span className='Navbar-span-icono text-light'><i class="fa-solid fa-address-book"></i></span>
            <Link className="nav-link text-light"  to='/contactos'>Contactos</Link>
          </li>
        </ul>
  </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Navbar;