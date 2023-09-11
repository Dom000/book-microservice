import { Request, Response } from "express";
import { CreateUserDto } from "../Dto/user.dto";
import Container from "typedi";
import UserService from "../Service";
import { LoginDto } from "../Dto/login.dto";

export class UserController {
    async createUser(req: Request, res: Response) {
        const userService = Container.get<UserService>(UserService)

        try {

            const data: CreateUserDto = req.body
            const response = await userService.createUser(data)
            res.json(response);
        } catch (error) {

        }
    }
    async login(req: Request, res: Response) {
        const userService = Container.get<UserService>(UserService)

        try {
            const data: LoginDto = req.body
            const response = await userService.login(data)
            res.json(response)
        } catch (error) {

        }
    }
    async getUser(req: Request, res: Response) {
        const userService = Container.get<UserService>(UserService)

        try {
            const { id } = req.params
            const response = await userService.getUser(id)
            res.json(response)
        } catch (error) {

        }
    }
    async getAllUser(req: Request, res: Response) {
        const userService = Container.get<UserService>(UserService)

        try {
            const response = await userService.getAllUsers()
            res.json(response)
        } catch (error) {

        }
    }
}