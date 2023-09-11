"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = require("express");
const validation_middleware_1 = require("../../../../../shared/middleware/validation.middleware");
const Controllers_1 = require("../Controllers");
const book_dto_1 = require("../Dto/book.dto");
class BookRoute {
    constructor() {
        this.path = '/book_service';
        this.router = (0, express_1.Router)();
        this.book = new Controllers_1.BookController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.book.getBook);
        this.router.get(`${this.path}`, this.book.getAllBook);
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(book_dto_1.CreateBookDto), this.book.createBook);
    }
}
exports.BookRoute = BookRoute;
//# sourceMappingURL=index.js.map