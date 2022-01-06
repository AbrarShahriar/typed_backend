"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test21641451298255 = void 0;
class test21641451298255 {
    constructor() {
        this.name = 'test21641451298255';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."user_sex_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "sex" "public"."user_sex_enum" NOT NULL DEFAULT 'other'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "body" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "body"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "sex"`);
        await queryRunner.query(`DROP TYPE "public"."user_sex_enum"`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "gender" "public"."user_gender_enum" NOT NULL`);
    }
}
exports.test21641451298255 = test21641451298255;
