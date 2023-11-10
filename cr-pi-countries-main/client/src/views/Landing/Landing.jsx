import style from "./Landing.module.css";
import fondopaises from "../../assets/fondopaises.jpg";
import { Link } from "react-router-dom";

const { boton, contenedor } = style;

export default function Landing() {
  return (
    <div>
      <div className={contenedor}>
        {/* <img src={fondopaises} alt="" /> */}
        <Link to="/home">
          <button className={boton}>Home</button>
        </Link>
        <h1>hola</h1>
      </div>
    </div>
  );
}

// en este componente hay que hacer algo creativo con css como ponerle videos o gif copados
