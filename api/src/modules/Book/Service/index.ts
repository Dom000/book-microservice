import Container, { Service } from "typedi";
import { HttpException } from "../../../../../shared/utils/HttpException";
import { CreateBookDto } from "../Dto/creatbook.dto";
import { USER_SERVICE_ROUTES, BOOK_SERVICE_ROUTES } from "../../../../../shared/routes/index";
import axios from "axios";

@Service()
export default class BookService {
  public userServiceRoutes = new USER_SERVICE_ROUTES();
  public bookServiceRoutes = new BOOK_SERVICE_ROUTES();


  async createBook(data: CreateBookDto) {
    try {

      const { data: res } = await axios.post(
        this.bookServiceRoutes.CREATE_BOOK,
        data
      );
      return res;
    } catch (error) {
      throw new HttpException(500, `${error.message}`);
    }
  }

  async getBook(id: string) {
    try {
      console.log(this.bookServiceRoutes.GET_BOOK);

      const { data: res } = await axios.get(this.bookServiceRoutes.GET_BOOK + `/${id}`);
      return res;
    } catch (error) {
      throw new HttpException(500, `${error.message}`);
    }
  }
  async getUserBook(id: string) {
    try {
      console.log(this.bookServiceRoutes.GET_BOOK);

      const { data: res } = await axios.get(this.bookServiceRoutes.GET_BOOK + `/${id}/user`);
      return res;
    } catch (error) {
      throw new HttpException(500, `${error.message}`);
    }
  }

  async getAllBook() {
    try {
      const { data: res } = await axios.get(this.bookServiceRoutes.GET_ALL_BOOKS);
      return res;
    } catch (error) {
      throw new HttpException(500, `${error.message}`);
    }
  }


}
