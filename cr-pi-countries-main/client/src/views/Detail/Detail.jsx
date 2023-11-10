import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <h1>{country.nombre}</h1>
      <img src={country.bandera} alt="" />
      <h2>{`NOMBRE | ${country?.nombre}`}</h2>
      {/* <h2>{`CAPITAL | ${country?.capital}`}</h2> */}
      <h2>{`CONTINENTE | ${country?.continente}`}</h2>
      <h2>{`SUBREGION | ${country?.subregion}`}</h2>
      <h2>{`AREA | ${country?.area}`}</h2>
      <h2>{`POBLACION | ${country?.poblacion}`}</h2>
      <div>
        {Array.isArray(country.activities) && country.activities.length > 0 ? (
          country.activities.map((act) => (
            <h2 key={act.nombre}>ACTIVIDADES | {act.nombre}</h2>
          ))
        ) : (
          <h2>no hay acts</h2>
        )}
      </div>
    </div>
  );
}
