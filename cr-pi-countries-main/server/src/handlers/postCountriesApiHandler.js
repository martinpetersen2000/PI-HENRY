const postCountriesApi = require("../controllers/postCountriesApi");

async function postCountriesApiHandler(req, res) {
  try {
    await postCountriesApi();
    res.status(200).send("Se guardaron los países correctamente");
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = postCountriesApiHandler;
