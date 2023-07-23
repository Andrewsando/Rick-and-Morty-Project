import React, { useState, useEffect } from "react";
import s from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../../redux/action";
import { connect } from "react-redux";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      });
    }
  };


  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={s.info}>
{ onClose && <button className={s.botonClose} onClick={() => onClose(id)}>
        X
      </button>}
      <button className={s.botonLike} onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

      <div>
        <NavLink className={s.linkIndividual} to={`/detail/${id}`}>
          <h2> {name}</h2>
        </NavLink>
        <h2 className={s.text}>Status: {status}</h2>
        <h2 className={s.text}>Specie: {species}</h2>
        <h2 className={s.text}>Gender: {gender}</h2>
        <h2>{origin}</h2>
      </div>
      <img className={s.img} src={image} alt="Rick" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
