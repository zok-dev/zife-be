import { hBooks } from "src/hBooks/hBooks.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('stateBook')
export class stateBook {
    @PrimaryGeneratedColumn()
    idStateBook!: number;

    @Column()
    nameState!: string;
    @Column()
    deletedAt!: Date;
    @OneToMany(()=> hBooks, (hBooks) => hBooks.idHBook)
    hBooks!: hBooks[];
}