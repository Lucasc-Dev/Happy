import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Orphanage from './Orphanage';

@Entity('orphanage_images')
export default class Image{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    path: string;

    @Column()
    orphanageId: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    orphanage: Orphanage;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}