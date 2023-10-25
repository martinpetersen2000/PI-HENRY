const { Country } = require("../db");
async function getCountryId(id) {
  const country = await Country.findByPk(id);
  return country;
}

module.exports = getCountryId;
