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

// const EMAIL = "andres.torressandoval@hotmail.com";
// const PASSWORD = "school123";
const URL = "http://localhost:3001/rickandmorty/login";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [favorites, setFavorites] = useState([])

  const login = async (userData) =>{
    console.log(login)
    try {
      const { email, password } = userData;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;

      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access, navigate]);

async function getFavorites(){
try{

} catch{
  
}

}

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert("¡There are no characters with that ID!");
    }
  }

  const onClose = (id) => {
    const characterFiltered = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(characterFiltered);
  };

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
        <Route path="/favorites" element={<Favorites myFavorites={my} onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
