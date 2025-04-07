"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_1 = require("./users");
let users = [...users_1.users];
exports.userRouter = (0, express_1.Router)();
// localhost:3000/users?departement="" pour trouver à quel département appartient un user
exports.userRouter.get("/", (req, res) => {
    const { departement } = req.query;
    if (departement) {
        const filteredUsers = users.filter(user => user.departement.toLowerCase() === departement.toLowerCase());
        return res.json(filteredUsers); // renvoyer et sortir ici
    }
    return res.json(users); // renvoyer toute la liste si aucun département n'est spécifié
});
// localhost:3000/users/:userId pour obtenir un utilisateur par ID
exports.userRouter.get("/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find(user => user.id === userId);
    if (user) {
        return res.json(user); // retourner directement si trouvé
    }
    return res.status(404).json({ message: "User not found" }); // renvoyer 404 si non trouvé
});
// Supprimer un utilisateur par ID
exports.userRouter.delete("/:userId", (req, res) => {
    const { userId } = req.params;
    const user = users.find((user) => user.id === userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" }); // Retourner une erreur 404 si l'utilisateur n'est pas trouvé
    }
    users = users.filter((user) => user.id !== userId);
    return res.status(204).end(); // Aucune donnée à renvoyer, mais OK (status 204)
});
