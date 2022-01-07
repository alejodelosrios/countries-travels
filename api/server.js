const express = require("express");
require("dotenv").config();
const { sequelize } = require("./db/models/index.js");
const router = require("./routes/index");
const morgan = require("morgan");
const app = express();

//Setting
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Routes
app.use("/api/v1", router);

//Starting server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    //Database connection
    sequelize.sync({ force: false, logging: console.log }).then(() => {
      console.log("Drop and re-sync db.");
    });
  });
}

module.exports = app;
