import { Request, Response } from "express";
export declare class UserController {
    getUser(req: Request, res: Response): Promise<void>;
    getAllUsers(req: Request, res: Response): Promise<void>;
}
