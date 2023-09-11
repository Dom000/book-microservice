"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const Service_1 = tslib_1.__importDefault(require("../Service"));
class UserController {
    async createUser(req, res) {
        const userService = typedi_1.default.get(Service_1.default);
        try {
            const data = req.body;
            const response = await userService.createUser(data);
            res.json(response);
        }
        catch (error) {
        }
    }
    async login(req, res) {
        const userService = typedi_1.default.get(Service_1.default);
        try {
            const data = req.body;
            const response = await userService.login(data);
            res.json(response);
        }
        catch (error) {
        }
    }
    async getUser(req, res) {
        const userService = typedi_1.default.get(Service_1.default);
        try {
            const { id } = req.params;
            const response = await userService.getUser(id);
            res.json(response);
        }
        catch (error) {
        }
    }
    async getAllUser(req, res) {
        const userService = typedi_1.default.get(Service_1.default);
        try {
            const response = await userService.getAllUsers();
            res.json(response);
        }
        catch (error) {
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=index.js.map