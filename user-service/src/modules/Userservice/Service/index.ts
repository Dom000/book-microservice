import Container, { Service } from "typedi";
import { CreateUserDto } from "../Dto/user.dto";
import { HttpException } from "../../../../../shared/utils/HttpException";
// import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";
import { LoginDto } from "../Dto/login.dto";
import { BookPrismaService } from "../../../../../book-service/src/modules/prisma/prisma.service"

@Service()
export default class UserService {
    public prisma = new PrismaClient();
    public book = new BookPrismaService()
    async createUser(data: CreateUserDto) {
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
        } catch (error) {
            throw new HttpException(500, `${error}`);
        } finally {
            await this.prisma.$disconnect();
        }
    }

    async login(data: LoginDto) {
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

            const ispass = user.password == data.password
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
        } catch (error) {
            console.error(`Login error: ${error.message}`);
            throw new HttpException(500, "An error occurred during login");
        }
    }
    async getUser(id: string) {

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
        } catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException(500, "An error occurred during login");
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
        } catch (error) {
            console.error(`error: ${error.message}`);
            throw new HttpException(500, "An error occurred during login");
        }
    }

    // private async verifyPassword(
    //     plainTextPassword: string,
    //     hashedPassword: string
    // ): Promise<boolean> {
    //     return await bcrypt.compare(plainTextPassword, hashedPassword)
    // }
}
