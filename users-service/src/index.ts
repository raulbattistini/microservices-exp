import { AppDataSource } from "./db/data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);
  })
  .catch((error) => console.log(error));
