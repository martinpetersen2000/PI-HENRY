// 📍 GET | /countries/name?="..."
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.

const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

async function getCountryByName(nombre) {
  if (nombre) {
    const country = await Country.findAll({
      where: { nombre: { [Op.iLike]: `%${nombre}%` } },
      include: [
        {
          model: Activity,
          attributes: ["nombre", "dificultad", "duracion", "temporada"],
          through: { attributes: [] },
        },
      ],
    });
    return country;
  }
}

module.exports = getCountryByName;
