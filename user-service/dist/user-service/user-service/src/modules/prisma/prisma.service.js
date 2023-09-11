"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrismaService = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
let UserPrismaService = exports.UserPrismaService = class UserPrismaService extends client_1.PrismaClient {
};
exports.UserPrismaService = UserPrismaService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], UserPrismaService);
//# sourceMappingURL=prisma.service.js.map