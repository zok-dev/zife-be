import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BooksController } from "./books.controller";
import { BookService } from "./books.service";
import { Book } from "./books.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers:[BooksController],
    providers:[BookService]
})
export class BooksModule {} 