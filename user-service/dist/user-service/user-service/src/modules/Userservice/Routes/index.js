"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const validation_middleware_1 = require("../../../../../shared/middleware/validation.middleware");
const Controllers_1 = require("../Controllers");
const user_dto_1 = require("../Dto/user.dto");
const login_dto_1 = require("../Dto/login.dto");
class UserRoute {
    constructor() {
        this.path = '/user_service';
        this.router = (0, express_1.Router)();
        this.user = new Controllers_1.UserController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}`, (0, validation_middleware_1.ValidationMiddleware)(user_dto_1.CreateUserDto), this.user.createUser);
        this.router.post(`${this.path}/login`, (0, validation_middleware_1.ValidationMiddleware)(login_dto_1.LoginDto), this.user.login);
        this.router.get(`${this.path}/:id`, this.user.getUser);
        this.router.get(`${this.path}`, this.user.getAllUser);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=index.js.map