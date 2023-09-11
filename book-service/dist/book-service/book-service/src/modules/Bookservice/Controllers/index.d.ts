import { Request, Response } from "express";
export declare class BookController {
    createBook(req: Request, res: Response): Promise<void>;
    getAllBook(req: Request, res: Response): Promise<void>;
    getBook(req: Request, res: Response): Promise<void>;
}
