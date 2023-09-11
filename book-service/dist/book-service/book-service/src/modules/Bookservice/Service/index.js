"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../../../shared/utils/HttpException");
const client_1 = require("@prisma/client");
let BookService = class BookService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createBook(data) {
        const newPrice = parseFloat(data.prices);
        try {
            // console.log(data,"ser");
            await this.prisma.book.create({
                data: {
                    author: data.author,
                    authorId: data.authorId,
                    prices: newPrice,
                    title: data.title,
                    description: data.description,
                },
            });
            return {
                status_code: 200,
                status: true,
                message: "book created",
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async getBook(id) {
        try {
            console.log(id);
            const book = await this.prisma.book.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (!book) {
                return {
                    status_code: 404,
                    status: false,
                    message: "book not found",
                };
            }
            return {
                status_code: 200,
                status: true,
                message: "success",
                data: book,
            };
        }
        catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException_1.HttpException(500, "An error occurred during login");
        }
    }
    async getAllBooks() {
        try {
            const user = await this.prisma.book.findMany({});
            return {
                status_code: 200,
                status: true,
                message: "success",
                data: user,
            };
        }
        catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException_1.HttpException(500, "An error occurred during login");
        }
    }
};
BookService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], BookService);
exports.default = BookService;
//# sourceMappingURL=index.js.map