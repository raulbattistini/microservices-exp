import { MigrationInterface, QueryRunner } from "typeorm";

export class insertRecord1663817107145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert into user(username, passwordHash, createdAt)
        values ('funcionou', '$2a$12$50lUcKAoQ5GuzH7jBIsFmOpHC2pOc0WHCpZZx5F4.gxUwYTQORBoe', '2022-09-22T03:20:41.889');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
