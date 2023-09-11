import { Request, Response } from "express";
export declare class UserController {
    createUser(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
    getUser(req: Request, res: Response): Promise<void>;
    getAllUser(req: Request, res: Response): Promise<void>;
}
