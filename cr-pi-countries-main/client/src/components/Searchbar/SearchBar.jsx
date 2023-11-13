import { useDispatch } from "react-redux";
import {
  filterByActivity,
  filterByContinent,
  orderAlfabetico,
  orderPoblacion,
} from "../../redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";

export default function SearchBar({ handleSubmit, handleChange }) {
  const dispatch = useDispatch();

  function handleFilterContinent(event) {
    dispatch(filterByContinent(event.target.value));
  }
  function handleFilterActivity(event) {
    const selectedActivity = event.target.value;
    dispatch(filterByActivity(selectedActivity));
  }

  function handleOrderAlfabetico(event) {
    dispatch(orderAlfabetico(event.target.value));
  }
  function handleOrderPoblacion(event) {
    dispatch(orderPoblacion(event.target.value));
  }
  return (
    <div className={style.navbar}>
      <form action="">
        <select
          className={style.navSelect}
          onChange={handleFilterContinent}
          name=""
          id=""
        >
          <option disabled selected value="">
            Continentes
          </option>
          <option value="Todos">Todos</option>
          <option value="Americas">Americas</option>
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
        </select>
        <select
          className={style.navSelect}
          onChange={handleFilterActivity}
          name=""
          id=""
        >
          <option disabled selected value="">
            Actividades
          </option>
          <option value="">Todas</option>
          <option value="Caminata">Caminata</option>
          <option value="Montaña">Montaña</option>
          <option value="Pesca">Pesca</option>
        </select>
        <Link to="/create">
          <button className={style.navButton}>Crear actividad</button>
        </Link>
        <label className={style.navLabel} htmlFor="">
          Ordenar por:
        </label>
        <select
          className={style.navSelect}
          onChange={handleOrderAlfabetico}
          name=""
          id=""
        >
          <option disabled selected value="">
            Ordenar por letra
          </option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        {/* <label className={style.navLabel} htmlFor=""></label> */}
        <select
          className={style.navSelect}
          onChange={handleOrderPoblacion}
          name=""
          id=""
        >
          <option value="+">de mayor a menor</option>
          <option value="-">de menor a mayor</option>
        </select>
        <input
          className={style.navInput}
          type="text"
          placeholder="Busqueda..."
          onChange={handleChange}
        />
        <button
          className={style.navButtonPais}
          type="submit"
          onClick={handleSubmit}
        >
          🔍
        </button>
      </form>
    </div>
  );
}
