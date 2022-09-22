export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'users',
    synchronize: false,
    "entities": [
        "src/entity/*.ts"
    ],
    "migrations": [
         "src/migrations/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migrations",
        "subscribersDir": "src/subscriber"
    }
};