import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../../../shared/middleware/validation.middleware";
import { BookController } from "../Controllers";
import { CreateBookDto } from "../Dto/book.dto";


export class BookRoute implements Routes {
    public path = '/book_service';
    public router = Router();
    public book = new BookController()

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.book.getBook);
        this.router.get(`${this.path}`, this.book.getAllBook);
        this.router.post(`${this.path}`, ValidationMiddleware(CreateBookDto), this.book.createBook);


    }
}
