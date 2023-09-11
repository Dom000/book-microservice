"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const HttpException_1 = require("../../../../../shared/utils/HttpException");
const index_1 = require("../../../../../shared/routes/index");
const axios_1 = tslib_1.__importDefault(require("axios"));
let USerService = class USerService {
    constructor() {
        this.userServiceRoutes = new index_1.USER_SERVICE_ROUTES();
    }
    async getUser(id) {
        try {
            const { data: res } = await axios_1.default.get(this.userServiceRoutes.GET_USER + `/${id}`);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error}`);
        }
    }
    async getAllUser() {
        try {
            const { data: res } = await axios_1.default.get(this.userServiceRoutes.GET_ALL_USER);
            return res;
        }
        catch (error) {
            throw new HttpException_1.HttpException(500, `${error.message}`);
        }
    }
};
USerService = tslib_1.__decorate([
    (0, typedi_1.Service)()
], USerService);
exports.default = USerService;
//# sourceMappingURL=index.js.map