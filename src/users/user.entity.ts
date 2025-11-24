import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser?: number;

  @Column()
  nameUser?: string;

  @Column()
  lastNameUser?: string;

  @Column()
  nickNameUser?: string;

  @Column()
  emailUser?: string;

  @Column()
  passwordUser?: string;

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}
