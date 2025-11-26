import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/usersDto/createUserDto';
import { UpdateUserDto } from 'src/dto/usersDto/updateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(dto: CreateUserDto) {
    const user = this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }
  findAll() {
    return this.usersRepository.find();
  }
  findOne(idUser: number) {
    return this.usersRepository.findOneBy({ idUser });
  }
  findOneByEmail(emailUser: string) {
    return this.usersRepository.findOneBy({ emailUser });
  }
  delete(idUser: number) {
    return this.usersRepository.delete(idUser);
  }
  update(idUser: number, dto: UpdateUserDto) {
    return this.usersRepository.update(idUser, dto);
  }
}
