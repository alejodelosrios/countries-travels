var express = require("express");
var activitiesRoutes = express.Router();
const ActivityController = require("../controllers/ActivityController");

// Rutas con su correspondiente  método en el controller
activitiesRoutes.post("/", ActivityController.create);

module.exports = activitiesRoutes;
