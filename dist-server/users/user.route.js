"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const users_1 = require("./users");
let users = [...users_1.users];
exports.userRouter = (0, express_1.Router)();
const JsonP = (0, express_1.json)();
const bodyParser = (0, express_1.urlencoded)();
const userController = (0, user_controller_1.userControllerFactory)();
// localhost:3000/users?departement="" pour trouver à quel département appartient un user
exports.userRouter.get("/", userController.getAllUsers);
// localhost:3000/users/:userId pour obtenir un utilisateur par ID
exports.userRouter.get("/:userId", userController.getUserById);
// Supprimer un utilisateur par ID
exports.userRouter.delete("/:userId", userController.deleteUser);
exports.userRouter.post("/", bodyParser, JsonP, userController.createUser);
