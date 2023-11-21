import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.contenedor}>
      <div className={style.texto}>
        <div className={style.welCountries}>
          <h1 className={style.welcome}>WELCOME TO</h1>
          <h1 className={style.countries}>COUNTRIES</h1>
        </div>

        <p className={style.parrafo}>
          Bienvenido a nuestra sección dedicada a países, donde cada detalle se
          fusiona para ofrecerte una experiencia única. Sumérgete en la cultura,
          los paisajes y los secretos de tus destinos favoritos.
        </p>
      </div>
      <Link to="/home">
        <button className={style.boton}>Empezar</button>
      </Link>
    </div>
  );
}

// en este componente hay que hacer algo creativo con css como ponerle videos o gif copados
