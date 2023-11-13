const axios = require("axios");
const URL = "http://localhost:5000/countries";
const { Country } = require("../db");
// const Country = require("../models/Country");

async function postCountriesApi() {
  const { data } = await axios.get(URL);

  const paises = data.map((pais) => ({
    id: pais.cca3,
    nombre: pais.translations.spa.common,
    bandera: pais.flags?.png,
    continente: pais.region,
    capital: pais.capital != null ? pais.capital : "No data",
    subregion: pais.subregion,
    area: pais.area,
    poblacion: pais.population,
  }));
  // console.log(paises);

  await Country.bulkCreate(paises);
}

module.exports = postCountriesApi;
