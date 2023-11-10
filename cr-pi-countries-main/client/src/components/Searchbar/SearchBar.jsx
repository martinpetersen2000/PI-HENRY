import { useDispatch } from "react-redux";
import {
  filterByActivity,
  filterByContinent,
  orderAlfabetico,
  orderPoblacion,
} from "../../redux/actions";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <form action="">
      <Link to="/create">
        <button>create</button>
      </Link>
      <select onChange={handleFilterContinent} name="" id="">
        <option value="Todos">Todos</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
      <select onChange={handleFilterActivity} name="" id="">
        <option value="">Todas</option>
        <option value="Caminata">Caminata</option>
        <option value="Montaña">Montaña</option>
        <option value="Pesca">Pesca</option>
      </select>
      {/* <div> */}
      <label htmlFor="">ordenar por letra</label>
      <select onChange={handleOrderAlfabetico} name="" id="">
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      {/* </div> */}
      <label htmlFor="">ordenar por poblacion</label>
      <select onChange={handleOrderPoblacion} name="" id="">
        <option value="+">de mayor a menor</option>
        <option value="-">de menor a mayor</option>
      </select>
      <input type="text" placeholder="Busqueda..." onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
    </form>
  );
}
