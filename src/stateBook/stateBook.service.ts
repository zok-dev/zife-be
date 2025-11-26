import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { stateBook } from "./stateBook.entity";

@Injectable()
export class stateBookService {
    constructor(private readonly stateBookRepository: Repository<stateBook>) {}
}