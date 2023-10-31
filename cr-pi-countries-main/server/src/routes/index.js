const { Router } = require("express");
const postCountriesApiHandler = require("../handlers/postCountriesApiHandler");
const getCountriesHandler = require("../handlers/getCountriesHandler");
const getCountryIdHandler = require("../handlers/getCountryIdHandler");
const getCountryByNameHandler = require("../handlers/getCountryByNameHandler");
const postActivitiesHandler = require("../handlers/postActivityHandler");
const getActivitiesHandler = require("../handlers/getActivitiesHandler");
const router = Router();

router.post("/", postCountriesApiHandler);
router.get("/", getCountriesHandler);
router.get("/countries", getCountryByNameHandler);
router.get("/countries/:id", getCountryIdHandler);
router.post("/activities", postActivitiesHandler);
router.get("/activities", getActivitiesHandler);
module.exports = router;
