import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovePhonenumber1774262365332 implements MigrationInterface {
    name = 'RemovePhonenumber1774262365332'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "phonenumber"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "phonenumber" character varying NOT NULL`);
    }

}
