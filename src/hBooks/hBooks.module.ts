import { TypeOrmModule } from "@nestjs/typeorm";
import { hBooks } from "./hBooks.entity";
import { hBooksService } from "./hBooks.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([hBooks])],
    providers: [hBooksService],
    exports: [hBooksService],
})
export class hBooksModule {}