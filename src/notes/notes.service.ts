import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Note } from "./notes.entity";
import { CreateNoteDto } from "src/dto/notesDto/createNoteDto";
import { UpdateNoteDto } from "src/dto/notesDto/updateNoteDto";

@Injectable()
export class NoteService {
    constructor(
        @InjectRepository(Note)
        private notesRepository: Repository<Note>,
    ) {}

    create(dto: CreateNoteDto) {
        const note = this.notesRepository.create(dto);
        return this.notesRepository.save(note);
    }
    findAll() {
        return this.notesRepository.find();
    }
    findOne(idNote: number) {
        return this.notesRepository.findOneBy({ idNote });
    }
    delete(idNote: number) {
        return this.notesRepository.delete(idNote);
    }
    update(idNote: number, dto: UpdateNoteDto) {
        return this.notesRepository.update(idNote, dto);
    }
}