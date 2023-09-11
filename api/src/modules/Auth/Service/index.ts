import Container, { Service } from "typedi";
import { HttpException } from "../../../../../shared/utils/HttpException";
import { CreateUserDto } from "../Dto/auth.dto";
import { LoginDto } from "../Dto/login.dto";
import { USER_SERVICE_ROUTES } from "../../../../../shared/routes/index";
import axios from "axios";

@Service()
export default class AuthService {
    public userServiceRoutes = new USER_SERVICE_ROUTES();
    async createUser(data: CreateUserDto) {
        try {

            const { data: res } = await axios.post(
                this.userServiceRoutes.CREATE_USER,
                data
            );
            return res;
        } catch (error) {
            throw new HttpException(500, `${error.message}`);
        }
    }
    async login(data: LoginDto) {
        try {

            const { data: res } = await axios.post(
                this.userServiceRoutes.LOGIN,
                data
            );
            return res;
        } catch (error) {
            throw new HttpException(500, `${error.message}`);
        }
    }
}
