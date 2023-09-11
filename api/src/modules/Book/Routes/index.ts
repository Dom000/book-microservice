import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { BookController } from "../Controllers";
import { ValidationMiddleware } from "../../../../../shared/middleware/validation.middleware";
import { CreateBookDto } from "../Dto/creatbook.dto";



export class BookRoute implements Routes {
    public path = "/book";
    public router = Router();
    public book = new BookController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, this.book.createBook);
        this.router.get(`${this.path}`, this.book.getAllBook);
        this.router.get(`${this.path}/:id`, this.book.getBook);
        this.router.get(`${this.path}/:id/user`, this.book.getUserBook);
    }
}
