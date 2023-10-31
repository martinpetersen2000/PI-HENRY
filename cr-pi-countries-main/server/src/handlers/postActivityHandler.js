const postActivities = require("../controllers/postActivities");

async function postActivitiesHandler(req, res) {
  const { nombre, dificultad, duracion, temporada, countries } = req.body;

  try {
    const newActivity = await postActivities({
      nombre,
      dificultad,
      duracion,
      temporada,
      countries,
    });
    res.status(200).json(newActivity);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = postActivitiesHandler;
