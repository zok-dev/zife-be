import { Body, Controller, Post } from "@nestjs/common";
import { NoteService } from "./notes.service";
import { CreateNoteDto } from "../dto/notesDto/createNoteDto";

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService: NoteService) {}

    @Post('createNote')
    create(@Body() dto: CreateNoteDto) {
        return this.notesService.create(dto);
    }
}