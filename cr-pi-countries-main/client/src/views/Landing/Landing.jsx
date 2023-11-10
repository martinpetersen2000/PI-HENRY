import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const { contenedor, boton } = style;

export default function Landing() {
  return (
    <div className={contenedor}>
      <div>
        {/* <img src={fondopaises} alt="" /> */}
        <Link to="/home">
          <button>Home</button>
        </Link>
        <h1>hola</h1>
      </div>
    </div>
  );
}

// en este componente hay que hacer algo creativo con css como ponerle videos o gif copados
