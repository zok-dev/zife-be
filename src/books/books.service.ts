import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./books.entity";
import { Repository } from "typeorm";
import { CreateBookDto } from "src/dto/booksDto/createBookDto";
import { UpdateBookDto } from "src/dto/booksDto/updateBookDto";

@Injectable()
export class BookService  {
    constructor(
        @InjectRepository(Book)
        private readonly repo: Repository<Book>
    ){}

    create(dto: CreateBookDto){
        const book = this.repo.create(dto);
        return this.repo.save(book);
    }

    findAll(){
        return this.repo.find();
    }

    findOne(idBook: number){
        return this.repo.findOneBy({ idBook });
    }

    delete(idBook: number){
        return this.repo.delete(idBook);
    }

    update(idBook: number, dto: UpdateBookDto){
        return this.repo.update(idBook, dto);
    }
}
export default BookService;