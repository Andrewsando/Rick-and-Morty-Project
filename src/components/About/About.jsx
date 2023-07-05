import s from "./About.module.css";
import yo from '../../Imagenes/thumbnail_image001.jpg'
import linkedIn from '../../Imagenes/linkedin_pixel_logo_icon_181925.png'

const About = () => {
  return (
    <div>
      <img 
        src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png"
        className={s.titulo}
        alt="rickandmorty"/>
        
      <div className={s.carta}>
      <a  href='https://www.linkedin.com/in/andr%C3%A9s-torres-sandoval-a51262267/'>
          <img className={s.linkedInIcon} src={linkedIn} alt='yo' />
        </a>
        <div className={s.info}>
          <h2 className={s.nombre}>ANDRES TORRES SANDOVAL</h2>
          <h3 className={s.texto}>Status: SOFTWARE DEVELOPER</h3>
          <h2 className={s.texto}>Specie: HUMAN</h2>
          <h2 className={s.texto}>Gender: MALE</h2>
          <h2 className={s.texto}>Origen: EARTH</h2>
        </div>
        <div>
          <img className={s.img} src={yo} alt='yo' />
        </div>
      </div>
      <div className={s.confidential}>
        CONFIDENTIAL INFORMATION READ BELOW
      </div>
      <div className={s.paragraph}>
     I am a full stack software developer, I studied at SoyHenry, the best programming academy in Latin America, I was based on the theme of the animated cartoon Rick and Morty, this design was made using the react library, and stylized with css modules, if you have any questions do not hesitate to contact me on linkedIn, in my letter you will find the logo of the page that will take you directly to my profile. 
     
     Greetings human! :)
      </div>
    </div>
  );
};

export default About;
