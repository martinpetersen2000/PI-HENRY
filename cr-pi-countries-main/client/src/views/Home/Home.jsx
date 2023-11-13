import { getCountries, getCountriesByName } from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/Searchbar/SearchBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  //el dispatch es la forma en la que yo le mando una action a mi store

  const allCountries = useSelector((state) => state.allCountries);

  const [input, setInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;

  function handleChange(event) {
    event.preventDefault();
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getCountriesByName(input));
  }

  useEffect(() => {
    dispatch(getCountries());
    //para hacer despues averiguar sobre el on mount, lo explica en la parte 2 de front end en el minuto 14
  }, [dispatch]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className={style.contenedor}>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allCountries={currentCountries} />
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastCountry >= allCountries.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
