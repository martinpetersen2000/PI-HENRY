const getActivities = require("../controllers/getActivities");

async function getActivitiesHandler(req, res) {
  try {
    const activities = await getActivities();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = getActivitiesHandler;
