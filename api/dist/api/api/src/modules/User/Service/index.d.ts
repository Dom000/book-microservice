import { USER_SERVICE_ROUTES } from "../../../../../shared/routes/index";
export default class USerService {
    userServiceRoutes: USER_SERVICE_ROUTES;
    getUser(id: string): Promise<any>;
    getAllUser(): Promise<any>;
}
