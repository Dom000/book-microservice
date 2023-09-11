import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { UserController } from "../Controllers";



export class UserRoute implements Routes {
    public path = '/user';
    public router = Router();
    public user = new UserController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.user.getUser);
        this.router.get(`${this.path}`, this.user.getAllUsers);

    }
}
