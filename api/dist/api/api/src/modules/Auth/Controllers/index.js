"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const typedi_1 = tslib_1.__importDefault(require("typedi"));
const Service_1 = tslib_1.__importDefault(require("../Service"));
class AuthController {
    async createUser(req, res) {
        const authService = typedi_1.default.get(Service_1.default);
        try {
            const data = req.body;
            const response = await authService.createUser(data);
            res.json(response);
        }
        catch (error) { }
    }
    async login(req, res) {
        const authService = typedi_1.default.get(Service_1.default);
        try {
            const data = req.body;
            const response = await authService.login(data);
            res.json(response);
        }
        catch (error) { }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=index.js.map