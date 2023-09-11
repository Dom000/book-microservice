import { Request, Response } from "express";
import Container from "typedi";
import userService from "../Service";

export class UserController {
    async getUser(req: Request, res: Response) {
        const authService = Container.get<userService>(userService)
        try {
            const { id } = req.params
            const response = await authService.getUser(id)
            res.status(response.status_code).json(response);
        } catch (error) {

        }
    }
    async getAllUsers(req: Request, res: Response) {
        const authService = Container.get<userService>(userService)

        try {

            const response = await authService.getAllUser()
            res.status(response.status_code).json(response);
        } catch (error) {

        }
    }
}