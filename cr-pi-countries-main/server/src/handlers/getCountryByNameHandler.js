const getCountryByName = require("../controllers/getCountryByName");
const { Op } = require("sequelize");

async function getCountryByNameHandler(req, res) {
  const { nombre } = req.query;

  try {
    if (!nombre) {
      throw new Error("Ingrese un país");
    }
    console.log("Nombre recibido en el controlador:", nombre);
    const paises = await getCountryByName(nombre);
    if (!paises.length) throw new Error("No hay coincidencias con ese país");

    res.status(200).json(paises);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = getCountryByNameHandler;
