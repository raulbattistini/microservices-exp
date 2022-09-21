import { MigrationInterface, QueryRunner } from "typeorm"

export class User1663702635939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE photos(
          id int auto_increment not null,
          name varchar(60),
          filename varchar(60) not null,
          isPublished boolean,
          PRIMARY KEY (id) 
        );
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP DATABASE user;`)
    }

}
