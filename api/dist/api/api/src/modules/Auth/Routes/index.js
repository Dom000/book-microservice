"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const express_1 = require("express");
const Controllers_1 = require("../Controllers");
class AuthRoute {
    constructor() {
        this.path = '/auth';
        this.router = (0, express_1.Router)();
        this.auth = new Controllers_1.AuthController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post(`${this.path}/create`, this.auth.createUser);
        this.router.post(`${this.path}/login`, this.auth.login);
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=index.js.map