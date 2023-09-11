import { Routes } from "../../../../interface/routes.interface";
import { BookController } from "../Controllers";
export declare class BookRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    book: BookController;
    constructor();
    private initializeRoutes;
}
