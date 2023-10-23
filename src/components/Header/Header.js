import React from 'react';
import '../Header/Header.css';

const CommentBox = () => {
  const programmingTexts = [
    "La Puerta a un Mundo Digital: Aprender programación es como abrir la puerta a un mundo digital lleno de posibilidades. Con cada línea de código que escribes, creas las bases para innovaciones tecnológicas que pueden cambiar el futuro.",
    "El Poder de la Resolución de Problemas: La programación es más que escribir código; es la capacidad de resolver problemas de manera lógica y creativa. Aprender a programar te dota de una habilidad invaluable para la vida.",
    "Código: El Nuevo Lenguaje Universal: En un mundo globalizado, el código se ha convertido en el nuevo lenguaje universal. Aprender programación te permite comunicarte con personas de todo el mundo a través de la tecnología que construyes.",
    "La Programación es Creatividad en Acción: La programación es una forma de expresión creativa. Cada programa que escribes es como una obra de arte digital que puedes compartir con el mundo.",
    "Desafíos Constantes y Aprendizaje Permanente: La programación es un campo en constante evolución. Aprender a programar significa abrazar el aprendizaje permanente y enfrentar desafíos emocionantes a medida que te adaptas a nuevas tecnologías.",
    "Un Mundo de Oportunidades Profesionales: La demanda de programadores está en constante aumento. Aprender a programar te brinda acceso a un mundo de oportunidades profesionales en una variedad de industrias, desde la tecnología hasta la medicina y más."
  ];

  return (
    <div className="comment-box">
      {programmingTexts.map((text, index) => (
        <div className="card" key={index}>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
