import { IsNumber } from "class-validator";
import { hBooks } from "src/hBooks/hBooks.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    idBook?: number;

    @Column()
    titleBook?: string;
    @IsNumber()
    numberPages?: number;
    @Column()
    privateBook?: boolean;
    @Column()
    areaBook?: string;
    @Column()
    dateBook?: Date;
    @OneToMany(() => hBooks, (hbook) => hbook.idBook)
    historyBook!: hBooks[];
    constructor(partial?: Partial<Book>) {
        Object.assign(this, partial);
    }
}