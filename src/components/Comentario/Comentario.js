import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import hombre from '../../img/bart.jpg';
import mujer from '../../img/marge.jpg';
import avatar from '../../img/lisa.jpg';
import Noregistrado from '../../img/homero.jpg';
import Milhouse from '../../img/milhouse.jpg'
import '../Comentario/Comentario.css'; 

const Comentario = () => {
  const [datos, setDatos] = useState([
    { id: 1, nombre: "Hacer el TP", autor: "Laura", imagen: hombre, done: false },
    { id: 2, nombre: "Jugar al LOL", autor: "Matias", imagen: mujer, done: false },
    { id: 3, nombre: "Dominio total del mundo", autor: "Franco", imagen: avatar, done: false },
  ]);

  useEffect(() => {
    mostrarArreglo();
  }, [datos]);

  const agregarElemento = () => {
    let dato = document.getElementById('texto').value.trim();
    if (dato !== '' && datos.length <= 3) {
      setDatos(prevDatos => [...prevDatos, { id: prevDatos.length + 1, nombre: dato, autor: "Usuario", imagen: Milhouse, done: false }]);
      document.getElementById('texto').value = '';
    } else if (datos.length > 3) {
      Swal.fire('No se puede agregar más de un comentario.');
    } else {
      Swal.fire('Ingrese un Comentario Primero');
    }
  };

  const confirmarEliminarElemento = (index) => {
    let confirmar = window.confirm('¿Estás seguro de eliminar este comentario?');

    if (confirmar) {
      setDatos(prevDatos => {
        const newData = [...prevDatos];
        newData.splice(index, 1);
        return newData;
      });
    }
  };

  const mostrarArreglo = () => {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < datos.length; i++) {
      let dato = datos[i];

      let elementoDiv = document.createElement('div');
      elementoDiv.className = 'elemento';

      let imagen = document.createElement('img');
      imagen.src = dato.imagen || "";
      imagen.className = 'imagen-comentario';
      imagen.style.width = '90px';
      imagen.style.height = '90px';
      elementoDiv.appendChild(imagen);

      let nombreParrafo = document.createElement('p');
      nombreParrafo.innerText = dato.nombre;
      elementoDiv.appendChild(nombreParrafo);

      if (dato.id > 3) {
        let botonEliminar = document.createElement('button');
        botonEliminar.innerText = 'Eliminar';
        botonEliminar.setAttribute('data-index', i);
        botonEliminar.className = 'boton-eliminar';
        botonEliminar.onclick = () => confirmarEliminarElemento(i);
        elementoDiv.appendChild(botonEliminar);
      }

      resultado.appendChild(elementoDiv);
    }
  };

  return (
    <section id="comentario">
      <div className="nto1">
        <div>
          <h1>Comentarios:(Registrados)</h1>
        </div>
        <div id="resultado"></div>
      </div>

      <div id="deja_comentario">
        <div className="noticia" id="comentarioNoRegistrado">
          <h1>No Registrados</h1>
          <img src={Noregistrado} width="50px" alt="User Avatar" />
          <input type="text" id="texto" placeholder="Ingrese su comentario" />
          <button className="btn-agre" onClick={agregarElemento}>Agregar Comentario</button>
        </div>
      </div>
    </section>
  );
};

export default Comentario;