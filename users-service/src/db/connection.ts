import config from "config";
import { DataSource } from "typeorm";
import User from "../models/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "users",
  entities: [User],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB connection has been established!");
  })
  .catch((err) => {
    console.error("Error during initialization: ", err);
  });
