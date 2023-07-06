import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import s from './Detail.module.css'

const Detail = () =>{

    const {id} =useParams();
    const [character, setCharacter] = useState({});

     useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        })
        .catch((err) => window.alert("Error"));
     }, [id]);

    return(
      <>
       <img
      src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png"
      className={s.titulo}
      alt="rickandmorty" />
        <div className={s.carta}>
         <div className={s.info}>
            <h2 className={s.nombre}> {character?.name}</h2>
            <h3 className={s.texto}>Status: {character?.status}</h3>
            <h2 className={s.texto}>Specie: {character?.species}</h2>
            <h2 className={s.texto}>Gender: {character?.gender}</h2>
            <h2 className={s.texto}>Origen: {character?.origin?.name}</h2>
            </div>
            <div>
            <img className={s.img} src ={character?.image} alt={character?.name}/>
            </div>
        </div>
        </>
    )
}

export default Detail;