import { Sequelize } from "sequelize-typescript";
import path from "path";
const database = require("./database");

let sequelize;

sequelize = new Sequelize({
  ...database,
  dialect: process.env.SEQUELIZE_DIALECT,
  models: [path.join(__dirname, "..", "..", "models")],
  logging: false,
});

export default sequelize;
