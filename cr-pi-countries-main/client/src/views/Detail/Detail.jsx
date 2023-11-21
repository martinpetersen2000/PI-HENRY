import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";
import SearchBar from "../../components/Searchbar/SearchBar";
import flechaAtras from "../../components/Searchbar/flechaatras.svg";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(({ data }) => {
      if (data.nombre) {
        setCountry(data);
      } else {
        window.alert("No hay paises con ese ID");
      }
    });
    return setCountry({});
  }, [id]);

  return (
    <div>
      <Link to="/home">
        <button className={style.flechaAtras}>
          <img src={flechaAtras} alt="" />
        </button>
      </Link>
      <h2 className={style.descripcion}>Detalle de {country.nombre}</h2>
      <div className={style.contenedor}>
        <div className={style.pais}>
          <div>
            <img className={style.imagen} src={country.bandera} alt="" />
          </div>
          <div className={style.info}>
            <h2>Nombre: {country?.nombre}</h2>
            <h2>ID: {country?.id}</h2>
            <h2>Capital: {country?.capital}</h2>
            <h2>Continente: {country?.continente}</h2>
            <h2>
              {country.subregion != null && `Subregión: ${country?.subregion}`}
            </h2>
            <h2>Área: {country?.area}</h2>
            <h2>Población: {country?.poblacion}</h2>
          </div>
        </div>
        {Array.isArray(country.activities) && country.activities.length > 0 && (
          <div className={style.actividad}>
            <div className={style.actividades}>
              {country.activities.map((act) => (
                <div key={act.nombre}>
                  <h2>Actividad: {act.nombre}</h2>
                  <h2>Nivel de dificultad: {act.dificultad}</h2>
                  <h2>Duración: {act.duracion} hs</h2>
                  <h2>Temporada: {act.temporada}</h2>
                  <br />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
