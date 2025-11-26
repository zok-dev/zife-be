import { Controller } from "@nestjs/common";
import { stateBookService } from "./stateBook.service";

@Controller('stateBook')
export class stateBookController {
    constructor(private readonly stateBookService: stateBookService) {}
}