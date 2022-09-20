import { MigrationInterface, QueryRunner } from "typeorm"

export class User1663702635939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`SELECT * FROM user`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP DATABASE user`)
    }

}
