"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1641451918678 = void 0;
class test1641451918678 {
    constructor() {
        this.name = 'test1641451918678';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" integer DEFAULT '18'`);
        await queryRunner.query(`ALTER TABLE "post" ADD "body" character varying NOT NULL`);
        await queryRunner.query(`ALTER TYPE "public"."user_gender_enum" RENAME TO "user_gender_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" TYPE "public"."user_gender_enum" USING "gender"::"text"::"public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET DEFAULT 'other'`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum_old"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET DEFAULT 'other'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum_old" AS ENUM('male', 'female')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" TYPE "public"."user_gender_enum_old" USING "gender"::"text"::"public"."user_gender_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_gender_enum_old" RENAME TO "user_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "body"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }
}
exports.test1641451918678 = test1641451918678;
