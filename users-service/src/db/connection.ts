import config from "config";
import { USERS_SERVICE_DB_URL } from "../../config/config";
import { DataSource } from "typeorm";
import User from "#root/models/User";

const AppDataSource = new DataSource({
  entities: [User ],
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "arqurb",
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB connection has been established!");
  })
  .catch((err) => {
    console.error("Error during initialization: ", err);
  });
export default AppDataSource;
