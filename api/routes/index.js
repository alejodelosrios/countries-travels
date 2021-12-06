var express = require("express");
const activitiesRoutes = require("./activities");
const countriesRoutes = require("./countries");
const usersRoutes = require("./users");
var router = express.Router();

// Import route files
router.use("/users", usersRoutes);
router.use("/countries", countriesRoutes);
router.use("/activity", activitiesRoutes);

// Test route
router.get("/", (req, res) => {
  res.json({msg: "API working like a charm!"})
})

module.exports = router;
