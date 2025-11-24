import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  idNote?: number;

  @Column()
  titleNote?: string;
  @Column()
  contentNote?: string;
  @Column()
  dateNote?: Date;
  constructor(partial?: Partial<Note>) {
    Object.assign(this, partial);
  }
}
