import "./Card.module.css";

import { Link } from "react-router-dom";

export default function Card({ country }) {
  const { nombre, continente, bandera, id } = country;
  return (
    <div>
      <Link to={`detail/${id}`}>
        {/* <img src={imagen} alt="" /> */}
        <h1>Paiss: {nombre}</h1>
        <h2>Continente: {continente}</h2>
        
        <img src={bandera} alt="" />
      </Link>  
    </div>
  );
}
