"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const Service_1 = tslib_1.__importDefault(require("../Service"));
class UserController {
    async getUser(req, res) {
        const authService = typedi_1.default.get(Service_1.default);
        try {
            const { id } = req.params;
            const response = await authService.getUser(id);
            res.status(response.status_code).json(response);
        }
        catch (error) {
        }
    }
    async getAllUsers(req, res) {
        const authService = typedi_1.default.get(Service_1.default);
        try {
            const response = await authService.getAllUser();
            res.status(response.status_code).json(response);
        }
        catch (error) {
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=index.js.map