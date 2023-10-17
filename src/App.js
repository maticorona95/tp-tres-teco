import './App.css';
import Navbar from './components/Nav/Navbar.jsx'
import  Header  from './components/Header/Header.js';
import './components/Header/Header.css'
import Comentario from './components/Comentario/Comentario';
import Footer from './components/Footer/Footer';

 function App() {
  return (
    <div >
   <Navbar/> 
   <Header/>
   <Comentario/>
   <Footer/>
   
    </div>
  );
}

export default App;
