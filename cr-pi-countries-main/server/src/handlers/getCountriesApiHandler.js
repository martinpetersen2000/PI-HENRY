const getCountriesApi = require("../controllers/getCountriesApi");

async function getCountriesApiHandler(req, res) {
  try {
    await getCountriesApi();
    res.status(200).send("se guardaron los paises correctamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = getCountriesApiHandler;
