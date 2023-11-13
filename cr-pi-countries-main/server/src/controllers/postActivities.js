const { Country, Activity } = require("../db");

async function postActivities({
  nombre,
  dificultad,
  duracion,
  temporada,
  countries,
}) {
  const actividadExistente = await Activity.findOne({
    where: { nombre, countries },
  });

  if (actividadExistente) {
    throw new Error("La actividad ya existe");
  }
  const newActivity = await Activity.create({
    nombre,
    dificultad,
    duracion,
    temporada,
  });

  let paisesEncontrados = await Country.findAll({
    where: { nombre: countries },
  });
  newActivity.addCountry(paisesEncontrados);
  return newActivity;
}

module.exports = postActivities;
