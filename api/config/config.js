require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME || "alejodelosrios",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "pi_countries",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",
};
