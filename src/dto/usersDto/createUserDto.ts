import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  nameUser!: string;

  @IsString()
  lastNameUser!: string;

  @IsString()
  @MinLength(5, { message: 'El nombre debe tener al menos 5 caracteres' })
  nickNameUser!: string;

  @Type(() => Date)
  @IsDate()
  birthDateUser!: Date;

  @IsString()
  phoneUser!: string;

  @IsEmail()
  emailUser!: string;

  @IsString()
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
  passwordUser!: string;
}
