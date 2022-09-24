# Built with TypeORM

Steps to run this project:

1. Run `pnpm i` command
2. Setup database settings inside `data-source.ts` file (you can also set in .env file and call it inside `data-source.ts` as `process.env.varname`)
3. Run `pnpm watch` command

\
> Optional: 

1. Run `pnpm typeorm migration:create` whenever you want to run a new migration
2. Type your migration as `await queryRunner.query('SELECT * FROM table')`
3. Run `pnpm typeorm migration:run -d ./path/to/datasource.ts`

> Utilities:
* [MySQL docs](https://dev.mysql.com/doc/)
* [TypeORM changelog](https://github.com/typeorm/typeorm/blob/master/CHANGELOG.md)
* [TypeORM full docs](https://typeorm.io)
* [Insomnia](https://insomnia.rest/download)
* [UUID generator online](https://www.uuidgenerator.net/version1)
* [BCrypt password generator](https://bcrypt-generator.com)