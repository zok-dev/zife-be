import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/usersDto/createUserDto';
import { UpdateUserDto } from 'src/dto/usersDto/updateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get(':idUser')
  findOne(@Param('idUser') idUser: number) {
    return this.userService.findOne(+idUser);
  }
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post('delete/:idUser')
  delete(@Param('idUser') idUser: number) {
    return this.userService.delete(+idUser);
  }
  @Put('update/:idUser')
  update(@Param('idUser') idUser: number, @Body() dto: UpdateUserDto) {
    return this.userService.update(+idUser, dto);
  }
}
