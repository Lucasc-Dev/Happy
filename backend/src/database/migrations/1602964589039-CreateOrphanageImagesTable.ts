import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrphanageImagesTable1602964589039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orphanage_images',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'path',
                        type: 'varchar',
                    },
                    {
                        name: 'orphanageId',
                        type: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'OrphanageImage',
                        columnNames: ['orphanageId'],
                        referencedTableName: 'orphanages',
                        referencedColumnNames: ['id'],
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orphanage_images', 'OrphanageImage');

        await queryRunner.dropTable('orphanage_images');
    }

}
