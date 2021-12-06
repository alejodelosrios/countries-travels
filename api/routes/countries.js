var express = require("express");
var countriesRoutes = express.Router();
const CountryController = require("../controllers/CountryController");

countriesRoutes.get("/", CountryController.index);
countriesRoutes.get("/:id", CountryController.getById);

module.exports = countriesRoutes;
