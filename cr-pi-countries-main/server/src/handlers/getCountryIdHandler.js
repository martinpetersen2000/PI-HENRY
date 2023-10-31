const getCountryId = require("../controllers/getCountryById");

async function getCountryIdHandler(req, res) {
  try {
    const { id } = req.params;
    const pais = await getCountryId(id);
    console.log(pais);
    if (!pais)
      throw new Error(
        "El país no se encontró. El ID proporcionado no coincide con ningún país."
      );

    res.status(200).json(pais);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = getCountryIdHandler;
