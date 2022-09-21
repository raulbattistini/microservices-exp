import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class UserSession1663742799294 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP table userSessions;`)
  }
}
