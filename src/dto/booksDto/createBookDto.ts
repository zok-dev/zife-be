import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    titleBook!: string;

    @IsNumber()
    pagesBook!: number;
    @IsBoolean()
    privateBook!: boolean;
    @IsString()
    areaBook!:string;
    @Type(()=> Date)
    @IsDate()
    dateBook!: Date;
}