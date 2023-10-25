const getCountryId = require("../controllers/getCountryId");

async function getCountryIdHandler(req, res) {
  try {
    const { id } = req.params;
    const pais = await getCountryId(id);
    console.log(pais);
    res.status(200).json(pais);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = getCountryIdHandler;
