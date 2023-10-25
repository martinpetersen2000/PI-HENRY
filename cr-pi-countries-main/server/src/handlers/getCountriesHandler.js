const getCountries = require("../controllers/getCountries");

async function countriesHandler(req, res) {
  try {
    const response = await getCountries();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = countriesHandler;
