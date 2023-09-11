"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../../../shared/utils/HttpException");
// import bcrypt from "bcrypt"
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../../../../../book-service/src/modules/prisma/prisma.service");
let UserService = class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
        this.book = new prisma_service_1.BookPrismaService();
        // private async verifyPassword(
        //     plainTextPassword: string,
        //     hashedPassword: string
        // ): Promise<boolean> {
        //     return await bcrypt.compare(plainTextPassword, hashedPassword)
        // }
    }
    async createUser(data) {
        // const salt = bcrypt.genSaltSync(10);
        // const hashed_pass = bcrypt.hashSync(data.password, salt);
        try {
            const checkEmail = await this.prisma.user.findUnique({
                where: {
                    email: data.email,
                },
            });
            if (checkEmail) {
                return {
                    status_code: 400,
                    status: false,
                    message: "Email already exists kindly login",
                };
            }
            await this.prisma.user.create({
                data: {
                    user_name: data.user_name,
                    email: data.email,
                    password: data.password,
                },
            });
            return {
                status_code: 200,
                status: true,
                message: "user created",
            };
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error}`);
        }
        finally {
            await this.prisma.$disconnect();
        }
    }
    async login(data) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: data.email,
                },
            });
            if (!user) {
                return {
                    status_code: 400,
                    status: false,
                    message: "Incorrect email address",
                };
            }
            // const isPasswordValid = await this.verifyPassword(
            //     data.password,
            //     user.password
            // );
            const ispass = user.password == data.password;
            if (!ispass) {
                return {
                    status_code: 400,
                    status: false,
                    message: "Incorrect password",
                };
            }
            delete user.password;
            return {
                status_code: 200,
                status: true,
                message: "Login success",
                data: user,
            };
        }
        catch (error) {
            console.error(`Login error: ${error.message}`);
            throw new HttpException_1.HttpException(500, "An error occurred during login");
        }
    }
    async getUser(id) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: Number(id),
                },
            });
            if (!user) {
                return {
                    status_code: 404,
                    status: false,
                    message: "user not found",
                };
            }
            delete user.password;
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
    async getAllUsers() {
        try {
            const user = await this.prisma.user.findMany({
                select: {
                    id: true,
                    user_name: true,
                    email: true,
                    password: false,
                },
            });
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
UserService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], UserService);
exports.default = UserService;
//# sourceMappingURL=index.js.map