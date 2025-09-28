import { Request, Response, } from 'express';
import { UserService } from './users.service';
import { createValidator } from '@rblmdst/scheval';
export function userControllerFactory(userService : UserService) {
     return {
        getAllUsers: (req: Request, res: Response) => {
            const { departement } = req.query;
            const users = userService.getUsers(departement as string | undefined);
            res.json(users); // renvoyer toute la liste si aucun département n'est spécifié
        },  

        getUserById:(req: Request, res: Response) => {
            const { userId } = req.params;
            const user = userService.getUserById(userId)
            if (user) {
                return res.json(user); // retourner directement si trouvé
            }
            return res.status(404).json({ message: "User not found" }); // renvoyer 404 si non trouvé
        },

        deleteUser:(req: Request, res: Response) => {
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

        createUser:(req:Request, res:Response)  => {
        const {departement,name,level} = req.body;
        const userData = {departement,name,level};
        const validatorConfig= {
            departement:{
                type:["string", "The user departement must be a string"],
                required:["The user departement is required"],
                enum : [[ "IT" ,"HR" , "Marketing" , "Sourcing"], "The user departement must be take one of the following values:'IT', 'HR', 'SOURCING', 'MARKRTING'"]
            },
            name:{
                type:["string", "The user name must be a string"],
                required:["The user name is required"],
            },
            level:{
                type:["string", "The user departement must be a string"],
                required:["The user departement is required"],
                enum : [[ "J" ,"M" , "S"], "The user departement must be take one of the following values:'S', 'J', 'M'"]}
        }
        //cretaion de valiation de données
        const validator = createValidator(validatorConfig)
        const valiationErrors = validator.validate(userData)
        if (valiationErrors.length) {
            res.status(400)
            return res.json(valiationErrors);
        } 
        const user = userService.createUser(userData);
        res.status(201);
        return res.json(user);
        },
     };
}