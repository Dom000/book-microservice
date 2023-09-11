"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOOK_SERVICE_ROUTES = exports.USER_SERVICE_ROUTES = void 0;
class USER_SERVICE_ROUTES {
    constructor() {
        this.BASE_URL = 'http://localhost:5020/api/v1';
        this.CREATE_USER = `${this.BASE_URL}/user_service`;
        this.LOGIN = `${this.BASE_URL}/user_service/login`;
        this.GET_ALL_USER = `${this.BASE_URL}/user_service`;
        this.GET_USER = `${this.BASE_URL}/user_service`;
    }
}
exports.USER_SERVICE_ROUTES = USER_SERVICE_ROUTES;
class BOOK_SERVICE_ROUTES {
    constructor() {
        this.BASE_URL = 'http://localhost:5010/api/v1';
        this.CREATE_BOOK = `${this.BASE_URL}/book_service`;
        this.GET_ALL_BOOKS = `${this.BASE_URL}/book_service`;
        this.GET_BOOK = `${this.BASE_URL}/book_service`;
    }
}
exports.BOOK_SERVICE_ROUTES = BOOK_SERVICE_ROUTES;
//# sourceMappingURL=index.js.map