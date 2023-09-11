import { CreateBookDto } from "../Dto/creatbook.dto";
import { USER_SERVICE_ROUTES, BOOK_SERVICE_ROUTES } from "../../../../../shared/routes/index";
export default class BookService {
    userServiceRoutes: USER_SERVICE_ROUTES;
    bookServiceRoutes: BOOK_SERVICE_ROUTES;
    createBook(data: CreateBookDto): Promise<any>;
    getBook(id: string): Promise<any>;
    getUserBook(id: string): Promise<any>;
    getAllBook(): Promise<any>;
}
