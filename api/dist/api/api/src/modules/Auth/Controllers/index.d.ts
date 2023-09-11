import { Request, Response } from "express";
export declare class AuthController {
    createUser(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
}
