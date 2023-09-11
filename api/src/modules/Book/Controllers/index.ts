import { Request, Response } from "express";
import Container from "typedi";
import { CreateBookDto } from "../Dto/creatbook.dto";
import BookService from "../Service";

export class BookController {
  async createBook(req: Request, res: Response) {
    const bookService = Container.get<BookService>(BookService);

    try {
      const data: CreateBookDto = req.body;

      const response = await bookService.createBook(data);
      res.json(response);
    } catch (error) { }
  }


  async getBook(req: Request, res: Response) {
    const bookService = Container.get<BookService>(BookService);

    try {
      const { id } = req.params;

      const response = await bookService.getBook(id);
      res.json(response);
    } catch (error) { }
  }
  async getUserBook(req: Request, res: Response) {
    const bookService = Container.get<BookService>(BookService);

    try {
      const { id } = req.params;

      const response = await bookService.getUserBook(id);
      res.json(response);
    } catch (error) { }
  }

  async getAllBook(req: Request, res: Response) {
    const bookService = Container.get<BookService>(BookService);

    try {
      const response = await bookService.getAllBook();
      res.status(response.status_code).json(response);
    } catch (error) { }
  }
}
