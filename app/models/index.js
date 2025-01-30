const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Create Sequelize instance with object configuration
const sequelize = new Sequelize(
  dbConfig.DB, 
  dbConfig.USER, 
  dbConfig.PASSWORD, 
  {
    host: dbConfig.HOST,
    port: dbConfig.DB_PORT,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions,
    pool: dbConfig.pool,
    logging: console.log // you can set this to false to disable SQL logging
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.employee = require("./employee.model.js")(sequelize, Sequelize);

module.exports = db;