import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { hBooks } from "./hBooks.entity";

@Injectable()
export class hBooksService {
    constructor(private readonly hBooksRepository: Repository<hBooks>) {}
}
