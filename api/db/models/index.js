"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const config = require("../../config/config.js");
require("dotenv").config();
const db = {};

let sequelize;
sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: config.database,
        username: config.username,
        password: config.password,
        host: config.host,
        dialect: config.dialect,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
        define: {
          timestamps: false,
          underscored: true,
        },
      })
    : new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        define: {
          timestamps: false,
          underscored: true,
        },
      });

// checks the database connectivity
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the DB has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
