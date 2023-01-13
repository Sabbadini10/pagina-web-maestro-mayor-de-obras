import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";
import ImagenLogo from "../imagen/ImagenLogo";
import Logo from "../../imagenes/LogoRodrigo.jpg";

function Navbar() {
  return (
    <>
      <div className="Navbar d-flex flex-row bg-dark data-bs-theme='dark' border border-dark-subtle rounded-bottom">
        <div className="navbar-contenedor-imagen d-flex align-items-center">
          <ImagenLogo src={Logo} />
        </div>

        <nav className="navbar d-flex flex-row justify-content-around">
          <ul className="navbar-ul d-flex flex-row justify-content-around align-items-center gap-4 ">
            <li className="nav-item d-flex flex-row align-items-center gap-1">
              <span className="Navbar-span-icono text-light">
                <i class="fa-solid fa-house"></i>
              </span>
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item text-light d-flex flex-row align-items-center gap-1">
              <span className="Navbar-span-icono text-light">
                <i class="fa-solid fa-folder-closed"></i>
              </span>
              <Link className="nav-link text-light" to="/planos">
                Planos
              </Link>
            </li>
            <li className="nav-item text-light d-flex flex-row align-items-center gap-1">
              <span className="Navbar-span-icono text-light">
                <i class="fa-solid fa-file-image"></i>
              </span>
              <Link className="nav-link text-light" to="/renders">
                Renders
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
