import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"
import { UserSession } from "../entity/UserSession"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "users",
    synchronize: true,
    logging: true,
    entities: [User, UserSession],
    migrations: ["./src/migration/**.{ts,js}"],
    subscribers: []
})
