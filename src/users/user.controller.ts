import { Request, Response, Router, json,urlencoded } from 'express';
import { users as userList } from './users';
import crypto from 'crypto'; 
let users = [...userList];


export function userControllerFactory() {
     return {
        getAllUsers: (req: Request, res: Response) => {
            const { departement } = req.query;
            if (departement) {
                const filteredUsers = users.filter(user =>
                    user.departement.toLowerCase() === (departement as string).toLowerCase()
                );
                return res.json(filteredUsers); // renvoyer et sortir ici
            }
        
            return res.json(users); // renvoyer toute la liste si aucun département n'est spécifié
        },

        getUserById:(req: Request, res: Response) => {
            const { userId } = req.params;
            const user = users.find(user => user.id === userId);
        
            if (user) {
                return res.json(user); // retourner directement si trouvé
            }
        
            return res.status(404).json({ message: "User not found" }); // renvoyer 404 si non trouvé
        },

        deleteUser:(req: Request, res: Response) => {
            const { userId } = req.params;
            const user = users.find((user) => user.id === userId);
        
            if (!user) {
                return res.status(404).json({ message: "User not found" }); // Retourner une erreur 404 si l'utilisateur n'est pas trouvé
            }
        
            users = users.filter((user) => user.id !== userId);
            return res.status(204).end(); // Aucune donnée à renvoyer, mais OK (status 204)
        },

        createUser:(req:Request, res:Response)  => {
        const {departement,name,level} = req.body;
        const id = crypto.randomUUID()
        const user = {id,departement,name,level}
        users = [...users, user]
        res.status(201);
        return res.json(user);
        },
     };
}