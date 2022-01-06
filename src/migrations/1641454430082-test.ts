import {MigrationInterface, QueryRunner} from "typeorm";

export class test1641454430082 implements MigrationInterface {
    name = 'test1641454430082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP NOT NULL`);
    }

}
