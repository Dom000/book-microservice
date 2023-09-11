import Container, { Service } from "typedi";
import { CreateBookDto } from "../Dto/book.dto";
import { HttpException } from "../../../../../shared/utils/HttpException";
import * as argon from "argon2";
import { PrismaClient } from "@prisma/client";

@Service()
export default class BookService {
    public prisma = new PrismaClient();
    async createBook(data: CreateBookDto) {
        const newPrice = parseFloat(data.prices)
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
        } catch (error) {
            throw new HttpException(500, `${error}`);
        } finally {
            await this.prisma.$disconnect();
        }
    }

    async getBook(id: string) {
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
        } catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException(500, "An error occurred during login");
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
        } catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException(500, "An error occurred during login");
        }
    }
    async getUserBooks(id: number) {
        try {
            const books = await this.prisma.book.findMany({
                where: {
                    authorId: id
                }
            });

            if (!books) {
                return {
                    status_code: 200,
                    status: true,
                    message: "create your first book",
                    data:[]
                };
            }  
            return {
                status_code: 200,
                status: true,
                message: "success",
                data: books,
            };
        } catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException(500, "An error occurred during login");
        }
    }
}
