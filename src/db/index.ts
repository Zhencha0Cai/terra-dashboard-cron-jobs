import { Sequelize, DataTypes } from "sequelize";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import models from "./models";
dotenv.config();

export default async () => {
  let sequelize = null;
  try {
    const { database, host, user, password, port } = process.env;
    const connection = await mysql.createConnection({
      host,
      port: parseInt(port),
      user,
      password,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    sequelize = new Sequelize(database, user, password, {
      host,
      dialect: "mysql",
      logging: true,
    });
    sequelize.sync();
    for (const model of models) {
      model(sequelize, DataTypes);
    }
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  return sequelize;
};
