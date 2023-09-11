import { CreateBookDto } from "../Dto/book.dto";
import { PrismaClient } from "@prisma/client";
export default class BookService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    createBook(data: CreateBookDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
    }>;
    getBook(id: string): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data?: undefined;
    } | {
        status_code: number;
        status: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            prices: number;
            authorId: number;
            description: string;
        };
    }>;
    getAllBooks(): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            prices: number;
            authorId: number;
            description: string;
        }[];
    }>;
    getUserBooks(id: number): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: {
            id: number;
            title: string;
            author: string;
            prices: number;
            authorId: number;
            description: string;
        }[];
    }>;
}
