import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const { contenedor, boton } = style;

export default function Landing() {
  return (
    <div className={contenedor}>
      <div>
        <h3>Descubre el Mundo!</h3>
        <br />
        <h1>
          Bienvenido a nuestra sección dedicada a países, donde cada detalle se
          fusiona para ofrecerte una experiencia única. Sumérgete en la cultura,
          los paisajes y los secretos de tus destinos favoritos.
        </h1>
      </div>
      <Link to="/home">
        <button>Empezar</button>
      </Link>
    </div>
  );
}

// en este componente hay que hacer algo creativo con css como ponerle videos o gif copados
