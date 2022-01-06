"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1641454430082 = void 0;
class test1641454430082 {
    constructor() {
        this.name = 'test1641454430082';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "gender" DROP NOT NULL`);
    }
}
exports.test1641454430082 = test1641454430082;
