const { Sequelize } = require("sequelize");
const pg = require("pg");

const dbConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectModule: pg,
    logging: false, // optional: disables SQL query logs
  }
);

// Check DB connection on app start
dbConnection
  .authenticate()
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.error("DB connection failed:", error.message);
  });

module.exports = dbConnection;
