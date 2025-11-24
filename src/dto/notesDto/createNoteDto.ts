import { Type} from "class-transformer"
import { IsDate, IsString, MinLength} from "class-validator"

export class CreateNoteDto {
    @IsString()
    @MinLength(5, { message: 'El nombre debe tener al menos 5 caracteres' })
    titleNote!: string;

    @IsString()
    @MinLength(5, { message: 'El nombre debe tener al menos 5 caracteres' })
    contentNote!: string;

    @Type(() => Date)
    @IsDate()
    dateNote!: Date;
}