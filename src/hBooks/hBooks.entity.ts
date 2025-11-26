import { Book } from "src/books/books.entity";
import { stateBook } from "src/stateBook/stateBook.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('hBooks')
export class hBooks {
    @PrimaryGeneratedColumn()
    idHBook!: number; //valor creciente historico de estado de los libros

    @Column()
    idBook!: number;

    @Column()
    idState!: number;

    @Column()
    date!: Date;

    @ManyToOne(()=>Book, (books)=>books.idBook)
    book!: Book;

    @ManyToOne(()=>stateBook, (states)=>states.idStateBook)
    state!: stateBook;    
}