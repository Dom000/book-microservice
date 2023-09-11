import { Routes } from "../../../../interface/routes.interface";
import { AuthController } from "../Controllers";
export declare class AuthRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    auth: AuthController;
    constructor();
    private initializeRoutes;
}
