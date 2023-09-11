"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const Service_1 = tslib_1.__importDefault(require("../Service"));
class BookController {
    async createBook(req, res) {
        const bookService = typedi_1.default.get(Service_1.default);
        try {
            const data = req.body;
            const response = await bookService.createBook(data);
            res.json(response);
        }
        catch (error) { }
    }
    async getBook(req, res) {
        const bookService = typedi_1.default.get(Service_1.default);
        try {
            const { id } = req.params;
            const response = await bookService.getBook(id);
            res.json(response);
        }
        catch (error) { }
    }
    async getAllBook(req, res) {
        const bookService = typedi_1.default.get(Service_1.default);
        try {
            const response = await bookService.getAllBook();
            res.status(response.status_code).json(response);
        }
        catch (error) { }
    }
}
exports.BookController = BookController;
//# sourceMappingURL=index.js.map