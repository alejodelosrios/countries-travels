var express = require("express");
var activitiesRoutes = express.Router();
const ActivityController = require("../controllers/ActivityController");

activitiesRoutes.post("/", ActivityController.create);

module.exports = activitiesRoutes;
