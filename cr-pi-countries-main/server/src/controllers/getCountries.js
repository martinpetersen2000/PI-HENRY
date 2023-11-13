const { Country, Activity } = require("../db");

async function getCountries() {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["nombre", "dificultad", "duracion", "temporada"],
      through: { attributes: [] },
    },
  });
  return countries;
}

module.exports = getCountries;
