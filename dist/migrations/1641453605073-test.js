"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1641453605073 = void 0;
class test1641453605073 {
    constructor() {
        this.name = 'test1641453605073';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TYPE "public"."user_sex_enum" RENAME TO "user_sex_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_gender_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" TYPE "public"."user_gender_enum" USING "gender"::"text"::"public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET DEFAULT 'other'`);
        await queryRunner.query(`DROP TYPE "public"."user_sex_enum_old"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."user_sex_enum_old" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" TYPE "public"."user_sex_enum_old" USING "gender"::"text"::"public"."user_sex_enum_old"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET DEFAULT 'other'`);
        await queryRunner.query(`DROP TYPE "public"."user_gender_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_sex_enum_old" RENAME TO "user_sex_enum"`);
    }
}
exports.test1641453605073 = test1641453605073;
