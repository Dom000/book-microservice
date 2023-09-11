"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../../../shared/utils/HttpException");
const index_1 = require("../../../../../shared/routes/index");
const axios_1 = tslib_1.__importDefault(require("axios"));
let AuthService = class AuthService {
    constructor() {
        this.userServiceRoutes = new index_1.USER_SERVICE_ROUTES();
    }
    async createUser(data) {
        try {
            const { data: res } = await axios_1.default.post(this.userServiceRoutes.CREATE_USER, data);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
    }
    async login(data) {
        try {
            const { data: res } = await axios_1.default.post(this.userServiceRoutes.LOGIN, data);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
    }
};
AuthService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=index.js.map