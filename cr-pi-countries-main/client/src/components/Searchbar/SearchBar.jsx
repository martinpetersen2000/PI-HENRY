import { useDispatch, useSelector } from "react-redux";
import {
  filterByActivity,
  filterByContinent,
  orderAlfabetico,
  orderPoblacion,
} from "../../redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import lupa from "./lupa.svg";
import flechaAtras from "./flechaatras.svg";

export default function SearchBar({ handleSubmit, handleChange }) {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.allActivities);
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
      <div>
        <Link to="/">
          <button className={style.flechaAtras}>
            <img src={flechaAtras} alt="" />
          </button>
        </Link>
        <input
          className={style.navInput}
          type="text"
          placeholder="Buscar país..."
          onChange={handleChange}
        />

        <button className={style.lupa} type="submit" onClick={handleSubmit}>
          <img src={lupa} alt="" />
        </button>
        <Link to="/create">
          <button className={style.navButtonActividad}>NUEVA ACTIVIDAD</button>
        </Link>
      </div>
      <form action="">
        <select
          className={style.navSelect}
          onChange={handleFilterActivity}
          name=""
          id=""
        >
          <option className={style.option} disabled selected value="">
            Actividades
          </option>
          {actividades?.map((act) => {
            return (
              <option className={style.option} value={act.nombre} key={act.id}>
                {act.nombre}
              </option>
            );
          })}
        </select>
        <select
          className={style.navSelect}
          onChange={handleFilterContinent}
          name=""
          id=""
        >
          <option className={style.option} disabled selected value="">
            Continente
          </option>
          <option className={style.option} value="Todos">
            Todos
          </option>
          <option className={style.option} value="Americas">
            Americas
          </option>
          <option className={style.option} value="Oceania">
            Oceania
          </option>
          <option className={style.option} value="Europe">
            Europe
          </option>
          <option className={style.option} value="Africa">
            Africa
          </option>
          <option className={style.option} value="Asia">
            Asia
          </option>
        </select>

        {/* <label className={style.navLabel} htmlFor="">
          Ordenar por:
        </label> */}
        <select
          className={style.navSelect}
          onChange={handleOrderAlfabetico}
          name=""
          id=""
        >
          <option disabled selected value="">
            Ordenar segun su inicial
          </option>
          <option className={style.option} value="A-Z">
            A-Z
          </option>
          <option className={style.option} value="Z-A">
            Z-A
          </option>
        </select>
        {/* <label className={style.navLabel} htmlFor=""></label> */}
        <select
          className={style.navSelect}
          onChange={handleOrderPoblacion}
          name=""
          id=""
        >
          <option disabled selected value="">
            Ordenar segun su poblacion
          </option>
          <option className={style.option} value="+">
            De mayor a menor poblacion
          </option>
          <option className={style.option} value="-">
            De menor a mayor poblacion
          </option>
        </select>
      </form>
    </div>
  );
}
