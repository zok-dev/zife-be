import { PartialType } from 'nestjs-mapped-types';
import { CreateUserDto } from './createUserDto.js';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
