import { Controller } from "@nestjs/common";
import { hBooksService } from "./hBooks.service";

@Controller('hBooks')
export class hBooksController {
    constructor(private readonly hBooksService: hBooksService) {}
}
//Hace falta el controlador en clase intermedia?