import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import s from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const EMAIL = "andres.torressandoval@hotmail.com";
const PASSWORD = "school123";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡There are no characters with that ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    const characterFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(characterFiltered);
  };
  const location = useLocation();

  return (
    <div className={s.App}>
      <div>
        {location.pathname !== "/" ? (
          <Nav onSearch={onSearch} setAcces={setAccess} />
        ) : null}
      </div>
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
