import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotesController } from "./notes.controller";
import { NoteService } from "./notes.service";
import { Note } from "./notes.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    controllers:[NotesController],
    providers:[NoteService]
})
export class NotesModule {} 