import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { ValidationMiddleware } from "../../../../../shared/middleware/validation.middleware";
import { UserController } from "../Controllers";
import { CreateUserDto } from "../Dto/user.dto";
import { LoginDto } from "../Dto/login.dto"


export class UserRoute implements Routes {
    public path = '/user_service';
    public router = Router();
    public user = new UserController()

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, ValidationMiddleware(CreateUserDto), this.user.createUser);
        this.router.post(`${this.path}/login`, ValidationMiddleware(LoginDto), this.user.login);
        this.router.get(`${this.path}/:id`, this.user.getUser);
        this.router.get(`${this.path}`, this.user.getAllUser);

    }
}
