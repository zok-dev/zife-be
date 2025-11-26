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
  passwordHashUser?: string | null;

  @Column() 
  refreshToken?: string | null;

  @Column({default: 'user'})
  typeUser!: 'admin' | 'user';

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}
