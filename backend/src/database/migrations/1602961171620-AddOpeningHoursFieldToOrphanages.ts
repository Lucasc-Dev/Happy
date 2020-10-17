import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddOpeningHoursFieldToOrphanages1602961171620 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'orphanages',
            new TableColumn({
                name: 'opening_hours',
                type: 'varchar',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
