import React, { useState } from 'react';
import '../Nav/Navbar.css';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">DG</div>
      <div className={`menu ${showMenu ? 'active' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Acerca de</a>
        <a href="#">Contacto</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        <div className={`bar ${showMenu ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
