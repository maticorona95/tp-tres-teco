import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.css';
import Icono from '../../img/icons8-logo.svg';

const Footer = () => {
  return (
    <footer id="ftcon" className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="#">
              <img src={Icono} alt="Logo icon by icons8" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>SOBRE NOSOTROS</h2>
          <p>Somos un programa de capacitación para nuevos desarrolladores.</p>
          <p>Si te interesa nuestro programa, síguenos en las redes.</p>
        </div>
        <div className="box">
          <h2>SEGUINOS EN NUESTRAS REDES</h2>
          <div className="red-social">
            <a href="https://www.linkedin.com/company/telecomempresas/" className="fab fa-linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/telecom.empresas/" className="fab fa-instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/telecomempresas" className="fab fa-twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/@GrupoTelecom" className="fab fa-youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>&copy; 2023 <b>DG</b> - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
