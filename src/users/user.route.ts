import { Request, Response, Router, json, urlencoded } from 'express';
import { userControllerFactory } from './user.controller';
import { users as userList } from './users';

let users = [...userList];

export const userRouter = Router();
const JsonP = json();
const bodyParser = urlencoded();

const userController = userControllerFactory();




// localhost:3000/users?departement="" pour trouver à quel département appartient un user
userRouter.get("/", userController.getAllUsers );

// localhost:3000/users/:userId pour obtenir un utilisateur par ID
userRouter.get("/:userId", userController.getUserById);

// Supprimer un utilisateur par ID
userRouter.delete("/:userId", userController.deleteUser);

userRouter.post("/",bodyParser,JsonP, userController.createUser);

