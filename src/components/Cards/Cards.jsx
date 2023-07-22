import Card from "./Singular/Card";
import s from './Cards.module.css'

export default function Cards({ characters, onClose }) {
  return (
      <>
      <img
      src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png"
      className={s.titulo}
      alt="rickandmorty" />
      <div className={s.contenedor}>
        {characters.map((prop) => {
          return (
            <Card
              onClose={onClose}
              name={prop.name}
              species={prop.species}
              gender={prop.gender}
              image={prop.image}
              id={prop.id}
              key={prop.id}
              status={prop.status}
              origin={origin.name}
              />
          );
        })}
      </div></>
  );
}
