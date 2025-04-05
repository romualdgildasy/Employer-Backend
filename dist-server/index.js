"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./users/user.route");
const logger_middleware_1 = require("./logger.middleware");
const PORT = 3000;
const app = (0, express_1.default)();
app.use(logger_middleware_1.logger);
app.use(express_1.default.json());
app.use("/users", user_route_1.userRouter);
app.listen(PORT, () => {
    console.log("Server started  and listen  on port", PORT);
});
