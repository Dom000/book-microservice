import { CreateUserDto } from "../Dto/user.dto";
import { PrismaClient } from "@prisma/client";
import { LoginDto } from "../Dto/login.dto";
import { BookPrismaService } from "../../../../../book-service/src/modules/prisma/prisma.service";
export default class UserService {
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    book: BookPrismaService;
    createUser(data: CreateUserDto): Promise<{
        status_code: number;
        status: boolean;
        message: string;
    }>;
    login(data: LoginDto): Promise<{
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
            user_name: string;
            email: string;
            password: string;
        };
    }>;
    getUser(id: string): Promise<{
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
            user_name: string;
            email: string;
            password: string;
        };
    }>;
    getAllUsers(): Promise<{
        status_code: number;
        status: boolean;
        message: string;
        data: {
            id: number;
            user_name: string;
            email: string;
        }[];
    }>;
}
