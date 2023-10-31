const { Country, Activity } = require("../db");

async function postActivities({
  nombre,
  dificultad,
  duracion,
  temporada,
  countries,
}) {
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
