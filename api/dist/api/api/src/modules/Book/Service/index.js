"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../../../shared/utils/HttpException");
const index_1 = require("../../../../../shared/routes/index");
const axios_1 = tslib_1.__importDefault(require("axios"));
let BookService = class BookService {
    constructor() {
        this.userServiceRoutes = new index_1.USER_SERVICE_ROUTES();
        this.bookServiceRoutes = new index_1.BOOK_SERVICE_ROUTES();
    }
    async createBook(data) {
        try {
            const { data: res } = await axios_1.default.post(this.bookServiceRoutes.CREATE_BOOK, data);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
    }
    async getBook(id) {
        try {
            console.log(this.bookServiceRoutes.GET_BOOK);
            const { data: res } = await axios_1.default.get(this.bookServiceRoutes.GET_BOOK + `/${id}`);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
    }
    async getAllBook() {
        try {
            const { data: res } = await axios_1.default.get(this.bookServiceRoutes.GET_ALL_BOOKS);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
    }
};
BookService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], BookService);
exports.default = BookService;
//# sourceMappingURL=index.js.map