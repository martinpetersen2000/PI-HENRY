import style from "./Card.module.css";
import { Link } from "react-router-dom";

const { contenedor, imagen, text, overlay } = style;
export default function Card({ country }) {
  const { nombre, continente, bandera, id } = country;
  return (
    <div className={contenedor}>
      <Link to={`detail/${id}`}>
        <div className={overlay}>
          <h1 className={text}>{nombre}</h1>
          <h2 className={text}>{continente}</h2>
        </div>
      </Link>
      <img className={imagen} src={bandera} alt="klok" />
    </div>
  );
}
