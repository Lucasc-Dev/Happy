import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Image from './Image';
@Entity('orphanages')
export default class Orphanage{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;
    
    @Column()
    about: string;
    
    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;
    
    @Column()
    open_on_weekends: boolean;

    @OneToMany(type => Image, image => image.orphanage, {
        cascade: ['insert', 'update'], eager: true,
    })
    @JoinColumn({ name: 'orphanageId' })
    images: Image[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}