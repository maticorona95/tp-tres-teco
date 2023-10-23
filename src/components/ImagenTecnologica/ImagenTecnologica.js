import React from 'react';
import '../ImagenTecnologica/ImagenTecnologica.css';
import Imagen from '../../img/innovacion-tecnologica.jpg'

const ImagenTecnologica = () => {
  return (
    <div className="imagen-container">
      <img src={Imagen} alt="Imagen de Telecom" />
    </div>
  );
};

export default ImagenTecnologica;
