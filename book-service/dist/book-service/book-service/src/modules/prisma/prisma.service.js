"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPrismaService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
let BookPrismaService = exports.BookPrismaService = class BookPrismaService extends client_1.PrismaClient {
};
exports.BookPrismaService = BookPrismaService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], BookPrismaService);
//# sourceMappingURL=prisma.service.js.map