import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "../models/User"
import { UserSession } from "../entity/UserSession"

export const AppDataSource = new DataSource({
    entities: ["./src/entity/*.ts"],
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "users",
    synchronize: true,
    logging: true,
    migrations: ["./src/migration/**.{ts,js}"],
    migrationsTableName: 'typeorm_metadata',
    subscribers: []
})
