import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = ({ onSearch, setAcces }) => {
  const handleLogOut = () => {
    setAcces(false);
  };

  return (
    <div className={s.barraNav}>
      <button className={s.botonLogOut} onClick={handleLogOut}>
        LOG OUT
      </button>
      <button className={s.botonAbout}>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/Favorites">Favorites</NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
