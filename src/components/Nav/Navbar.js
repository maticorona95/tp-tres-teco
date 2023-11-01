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
        <Link to="/imagen-tecnologica">Imagen Tecnológica</Link>
        <Link to="/comment-box">Comment Box</Link>
        <Link to="/comentario">Comentario</Link>
        <Link to="/footer">Footer</Link>
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

