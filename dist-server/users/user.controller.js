"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllerFactory = userControllerFactory;
const users_1 = require("./users");
const crypto_1 = __importDefault(require("crypto"));
let users = [...users_1.users];
function userControllerFactory() {
    return {
        getAllUsers: (req, res) => {
            const { departement } = req.query;
            if (departement) {
                const filteredUsers = users.filter(user => user.departement.toLowerCase() === departement.toLowerCase());
                return res.json(filteredUsers); // renvoyer et sortir ici
            }
            return res.json(users); // renvoyer toute la liste si aucun département n'est spécifié
        },
        getUserById: (req, res) => {
            const { userId } = req.params;
            const user = users.find(user => user.id === userId);
            if (user) {
                return res.json(user); // retourner directement si trouvé
            }
            return res.status(404).json({ message: "User not found" }); // renvoyer 404 si non trouvé
        },
        deleteUser: (req, res) => {
            const { userId } = req.params;
            const user = users.find((user) => user.id === userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" }); // Retourner une erreur 404 si l'utilisateur n'est pas trouvé
            }
            users = users.filter((user) => user.id !== userId);
            return res.status(204).end(); // Aucune donnée à renvoyer, mais OK (status 204)
        },
        createUser: (req, res) => {
            const { departement, name, level } = req.body;
            const id = crypto_1.default.randomUUID();
            const user = { id, departement, name, level };
            users = [...users, user];
            res.status(201);
            return res.json(user);
        },
    };
}
