import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class userSessions1663787952091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        columns: [
          {
            isPrimary: true,
            length: "36",
            name: "id",
            type: "char",
          },
          {
            length: "36",
            name: "userId",
            type: "char",
          },
          {
            default: "now()",
            name: "createdAt",
            type: "timestamp",
          },
          {
            name: "expiresAt",
            type: "datetime",
          },
        ],
        name: "usersSessions",
      })
    );
    await queryRunner.createForeignKey(
      "usersSessions",
      new TableForeignKey({
        columnNames: ["userId"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
