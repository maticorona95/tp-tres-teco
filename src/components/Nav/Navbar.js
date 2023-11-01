import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import '../Nav/Navbar.css';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">DG</div>
      <div className={`menu ${showMenu ? 'active' : ''}`}>
        <Link to="/">Inicio</Link>
       
        <Link to="/comment-box">Opiniones</Link>
        <Link to="/comentario">Comentarios</Link>
        <Link to="/footer">Contacto</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;

