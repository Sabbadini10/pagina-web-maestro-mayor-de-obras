import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer  footer sticky-footer bg-dark data-bs-theme='dark' border border-dark-subtle rounded-top">
      <div className="container my-auto mt-3">
        <div className="main-contenedor-redes d-flex flex-row justify-content-around">
          <div className="contenedor-caja-redes d-flex flex-column align-items-center justify-content-center">
            <h6 className="footer-redes-titulo">Whatsapp</h6>
            <a href="https://www.linkedin.com/in/matias-sabbadini-desarrollador/">
            <i class="main-redes-iconos fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="contenedor-caja-redes d-flex flex-column align-items-center justify-content-center">
            <h6 className="footer-redes-titulo">Email</h6>
            <a
              href={
                "mailto:matiassabbadini24@gmail.com?Subject=Interesado%20en%20contactarme"
              }
            >
              <i className="main-redes-iconos fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="contenedor-caja-redes d-flex flex-column align-items-center justify-content-center">
            <h6 className="footer-redes-titulo">Instagram</h6>
            <a href={"https://www.instagram.com/matias_sabbadini/"}>
              <i className="main-redes-iconos fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="copyright text-center my-auto Footer-span mt-2 mb-2">
          <span>Copyright &copy; Rodrigo Franco (2023)</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
