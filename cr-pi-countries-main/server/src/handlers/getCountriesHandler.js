const getCountries = require("../controllers/getCountries");

async function countriesHandler(req, res) {
  try {
    const response = await getCountries();
    if (!response.length) throw new Error("No hay países en la base de datos");
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = countriesHandler;
