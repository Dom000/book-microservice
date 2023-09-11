import Container, { Service } from "typedi";
import { HttpException } from "../../../../../shared/utils/HttpException";
import { USER_SERVICE_ROUTES } from "../../../../../shared/routes/index";
import axios from "axios";

@Service()
export default class USerService {
  public userServiceRoutes = new USER_SERVICE_ROUTES();
  async getUser(id: string) {
    try {
      const { data: res } = await axios.get(
        this.userServiceRoutes.GET_USER + `/${id}`
      );
      return res;
    } catch (error) {
      throw new HttpException(500, `${error}`);
    }
  }
  async getAllUser() {
    try {
      const { data: res } = await axios.get(
        this.userServiceRoutes.GET_ALL_USER
      );
      return res;
    } catch (error) {
      throw new HttpException(500, `${error.message}`);
    }
  }
}
