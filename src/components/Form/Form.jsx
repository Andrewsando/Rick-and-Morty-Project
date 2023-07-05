import {useState} from 'react'
import validation from '../../validation';
import s from "./Form.module.css";
import myGif from '../../Imagenes/Saltando.gif'


export default function Form({login}) {

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});


  const handleChange = (event)=>{
    setUserData({...userData, [event.target.name] : event.target.value});
    setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    login(userData)
  }
  return (
    <div className={s.all}>
    <div className={s.img}>
        <img src={myGif} alt='gif-saltando'></img>
      </div>
      <form className={s.form}>
      <img
          src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png"
          className={s.titulo}
          alt="rickandmorty" />
          
        <label className={s.text}>Email</label>
        <input className={s.input} name='email' type="email" onChange={handleChange} />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

        <label className={s.text}>Contraseña</label>
        <input className={s.input} name='password' type="password" onChange={handleChange} />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}

        <input className={s.boton} type="submit" onClick={handleSubmit} />
      </form>
    </div>

  );
}