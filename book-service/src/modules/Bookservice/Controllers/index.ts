import { Request, Response } from "express";
import { CreateBookDto } from "../Dto/book.dto";
import Container from "typedi";
import BookService from "../Service";

export class BookController {

  async createBook(req: Request, res: Response) {
    const bookService = Container.get<BookService>(BookService);

    try {
      const data: CreateBookDto = req.body;
      console.log(data);

      const response = await bookService.createBook(data);
      res.json(response);
    } catch (error) { }
  }


  async getAllBook(req: Request, res: Response) {
    const bookService = Container.get<BookService>(BookService);
    try {
      const response = await bookService.getAllBooks();
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

      const response = await bookService.getUserBooks(+id);
      res.json(response);
    } catch (error) { }
  }
}
