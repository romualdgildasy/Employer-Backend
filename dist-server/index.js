"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./users");
const PORT = 3000;
const app = (0, express_1.default)();
let users = [...users_1.users];
app.use(express_1.default.json());
//localhost:3000/users
app.get("/users", (req, res) => {
    res.json(users);
});
app.get("/users/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    }
    res.status(404);
    res.json({ message: "User not found" });
});
//Delete
app.delete("/users/:userId", (req, res) => {
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
app.listen(PORT, () => {
    console.log("Server started  and listen  on port", PORT);
});
