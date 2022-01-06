"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1641453410349 = void 0;
class test1641453410349 {
    constructor() {
        this.name = 'test1641453410349';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "sex" TO "gender"`);
        await queryRunner.query(`ALTER TYPE "public"."user_sex_enum" RENAME TO "user_gender_enum"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TYPE "public"."user_gender_enum" RENAME TO "user_sex_enum"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "gender" TO "sex"`);
    }
}
exports.test1641453410349 = test1641453410349;
