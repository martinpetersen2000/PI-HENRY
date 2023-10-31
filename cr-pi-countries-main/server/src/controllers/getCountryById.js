const { Country, Activity } = require("../db");
async function getCountryId(id) {
  const country = await Country.findByPk(id, {
    include: {
      model: Activity,
      attributes: ["nombre", "dificultad", "duracion", "temporada"],
      through: { attributes: [] },
    },
  });
  return country;
}

module.exports = getCountryId;
