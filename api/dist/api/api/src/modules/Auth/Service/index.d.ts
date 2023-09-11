import { CreateUserDto } from "../Dto/auth.dto";
import { LoginDto } from "../Dto/login.dto";
import { USER_SERVICE_ROUTES } from "../../../../../shared/routes/index";
export default class AuthService {
    userServiceRoutes: USER_SERVICE_ROUTES;
    createUser(data: CreateUserDto): Promise<any>;
    login(data: LoginDto): Promise<any>;
}
