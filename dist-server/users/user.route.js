"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_1 = require("./users");
let users = [...users_1.users];
exports.userRouter = (0, express_1.Router)();
//localhost:3000/users ?departement= "" pour trouver a quel departement appartient un user
exports.userRouter.get("/", (req, res) => {
    const { departement } = req.query;
    if (departement) {
        res.json(users.filter(user => user.departement.toLowerCase() === departement.toLowerCase()));
    }
    res.json(users);
});
//locahost:3000/getUers by Id
exports.userRouter.get("/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    }
    res.status(404);
    res.json({ message: "User not found" });
});
//Delete
exports.userRouter.delete("/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find((user) => user.id === userId);
    if (!user) {
        res.status(404);
        res.send();
    }
    users = users.filter((user) => user.id !== userId);
    res.status(204);
    res.end();
});
exports.userRouter.post("/toto", (req, res) => {
    res.send("Not implemented");
});
