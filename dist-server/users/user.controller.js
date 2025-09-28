"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllerFactory = userControllerFactory;
function userControllerFactory(userService) {
    return {
        getAllUsers: (req, res) => {
            const { departement } = req.query;
            const users = userService.getUsers(departement);
            res.json(users); // renvoyer toute la liste si aucun département n'est spécifié
        },
        getUserById: (req, res) => {
            const { userId } = req.params;
            const user = userService.getUserById(userId);
            if (user) {
                return res.json(user); // retourner directement si trouvé
            }
            return res.status(404).json({ message: "User not found" }); // renvoyer 404 si non trouvé
        },
        deleteUser: (req, res) => {
            const { userId } = req.params;
            const user = userService.getUserById(userId);
            // Vérifier si l'utilisateur existe
            // Si l'utilisateur n'existe pas, retourner une erreur 404
            if (!user) {
                return res.status(404).json({ message: "User not found" }); // Retourner une erreur 404 si l'utilisateur n'est pas trouvé
            }
            userService.deleteUser(userId); // Appeler le service pour supprimer l'utilisateur
            return res.status(204).end(); // Aucune donnée à renvoyer, mais OK (status 204)
        },
        createUser: (req, res) => {
            const { departement, name, level } = req.body;
            const userData = { departement, name, level };
            const user = userService.createUser(userData);
            res.status(201);
            return res.json(user);
        },
    };
}
