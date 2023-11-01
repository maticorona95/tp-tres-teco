import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio/Inicio'; // Reemplaza 'Inicio' con el nombre real de tu componente de inicio
import ImagenTecnologica from './components/ImagenTecnologica/ImagenTecnologica';
import CommentBox from './components/Header/Header';
import Comentario from './components/Comentario/Comentario';
import Footer from './components/Footer/Footer';
import Navbar from './components/Nav/Navbar';


 function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/imagen-tecnologica" element={<ImagenTecnologica />} />
        <Route path="/comment-box" element={<CommentBox />} />
        <Route path="/comentario" element={<Comentario />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
