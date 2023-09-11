"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = require("express");
const Controllers_1 = require("../Controllers");
class UserRoute {
    constructor() {
        this.path = '/user';
        this.router = (0, express_1.Router)();
        this.user = new Controllers_1.UserController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, this.user.getUser);
        this.router.get(`${this.path}`, this.user.getAllUsers);
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=index.js.map