"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1641452400609 = void 0;
class test1641452400609 {
    constructor() {
        this.name = 'test1641452400609';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "age" SET DEFAULT '15'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "age" SET DEFAULT '18'`);
    }
}
exports.test1641452400609 = test1641452400609;
