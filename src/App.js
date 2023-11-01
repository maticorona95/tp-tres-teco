import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/inicio/Inicio'; 
import ImagenTecnologica from './components/ImagenTecnologica/ImagenTecnologica';
import CommentBox from './components/Header/Header';
import Comentario from './components/Comentario/Comentario';
import Footer from './components/Footer/Footer';
import Navbar from './components/Nav/Navbar';
import LoadingPage from './components/LoadingPague/LoadingPague.js'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingPage />
      ) : (
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
      )}
    </div>
  );
}

export default App;
