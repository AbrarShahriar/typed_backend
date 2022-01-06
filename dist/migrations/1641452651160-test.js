"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1641452651160 = void 0;
class test1641452651160 {
    constructor() {
        this.name = 'test1641452651160';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "gender" TO "sex"`);
        await queryRunner.query(`ALTER TYPE "public"."user_gender_enum" RENAME TO "user_sex_enum"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TYPE "public"."user_sex_enum" RENAME TO "user_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "sex" TO "gender"`);
    }
}
exports.test1641452651160 = test1641452651160;
