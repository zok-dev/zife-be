import { Controller } from "@nestjs/common";
import { BookService } from "./books.service";

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BookService){}
}