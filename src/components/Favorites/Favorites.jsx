import Card from "../Cards/Singular/Card";
import { connect, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/action.js";
import { useState } from "react";
import s from "./Favorites.module.css";

const Favorites = ({ myFavorites, onClose }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <img
        src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png"
        className={s.titulo}
        alt="rickandmorty"
      />
      <div className={s.listaPadre}>
        <select className={s.lista} onChange={handleOrder}>
          <option value="A">Ascendent</option>
          <option value="D">Descendant</option>
        </select>
        <select className={s.lista} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          <option value="allCharacters">All Characters</option>
        </select>
      </div>
      <div className={s.container}>
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              status={fav.status}
              species={fav.species}
              gender={fav.gender}
              origin={fav.origin}
              image={fav.image}
            ></Card>
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
