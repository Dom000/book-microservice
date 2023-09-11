import { Routes } from "../../../../interface/routes.interface";
import { UserController } from "../Controllers";
export declare class UserRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    user: UserController;
    constructor();
    private initializeRoutes;
}
