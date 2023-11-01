import React from 'react';
import ImagenTecnologica from '../ImagenTecnologica/ImagenTecnologica';
import CommentBox from '../Header/Header';
import Comentario from '../Comentario/Comentario';
import Footer from '../Footer/Footer';

function Inicio() {
  return (
    <div>
      
      <ImagenTecnologica />
      <CommentBox />
      <Comentario />
      <Footer />
    </div>
  );
}

export default Inicio;
