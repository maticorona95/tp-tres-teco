import './App.css';
import Navbar from './components/Nav/Navbar.js'
import  CommentBox  from './components/Header/Header.js';
import './components/Header/Header.css'
import Comentario from './components/Comentario/Comentario';
import Footer from './components/Footer/Footer';
import ImagenTecnologica from './components/ImagenTecnologica/ImagenTecnologica';

 function App() {
  return (
    <div >
      
   <Navbar/> 
   <ImagenTecnologica/>
   <CommentBox/>
   <Comentario/>
   <Footer/>
   
    </div>
  );
}

export default App;
