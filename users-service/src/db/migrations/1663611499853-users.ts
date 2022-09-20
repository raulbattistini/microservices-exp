import { Entity, MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class Users1663611499853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
     `CREATE TABLE "users"(
      id CHAR(36),
      username VARCHAR(25),
      passwordHash CHAR(60),
      createdAt CHAR(10),
     );`
    );
    await queryRunner.createIndex(
        "users",
        new TableIndex({
            columnNames: ["username"],
            isUnique: true,
            name: "unique_username"
        })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }
}
