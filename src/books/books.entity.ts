import { IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    constructor(partial?: Partial<Book>) {
        Object.assign(this, partial);
    }
}