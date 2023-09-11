"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const validateEnv_1 = require("../../shared/utils/validateEnv");
const Routes_1 = require("./modules/Auth/Routes");
const Routes_2 = require("./modules/User/Routes");
const Routes_3 = require("./modules/Book/Routes");
(0, validateEnv_1.ValidateEnv)();
const app = new app_1.App([new Routes_2.UserRoute, new Routes_1.AuthRoute, new Routes_3.BookRoute]);
app.listen();
//# sourceMappingURL=index.js.map