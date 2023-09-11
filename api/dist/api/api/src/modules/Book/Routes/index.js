"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = require("express");
const Controllers_1 = require("../Controllers");
class BookRoute {
    constructor() {
        this.path = "/book";
        this.router = (0, express_1.Router)();
        this.book = new Controllers_1.BookController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, this.book.createBook);
        this.router.get(`${this.path}`, this.book.getAllBook);
        this.router.get(`${this.path}/:id`, this.book.getBook);
        this.router.get(`${this.path}/:id/user`, this.book.getUserBook);
    }
}
exports.BookRoute = BookRoute;
//# sourceMappingURL=index.js.map