import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { stateBookService } from "./stateBook.service";
import { stateBook } from "./stateBook.entity";

@Module({
    imports: [TypeOrmModule.forFeature([stateBook])],
    providers: [stateBookService],
    exports: [stateBookService],
})
export class stateBookModule {}