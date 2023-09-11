import { Router } from "express";
import { Routes } from "../../../../interface/routes.interface";
import { AuthController } from "../Controllers";



export class AuthRoute implements Routes {
    public path = '/auth';
    public router = Router();
    public auth = new AuthController()

    constructor() {
        this.initializeRoutes();

    }

    private initializeRoutes() {
        this.router.post(`${this.path}/create`, this.auth.createUser);
        this.router.post(`${this.path}/login`, this.auth.login);

    }
}
