import { PartialType } from "nestjs-mapped-types";
import { CreateNoteDto } from "./createNoteDto";

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}