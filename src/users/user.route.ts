import { Request, Response, Router} from 'express'
import { users as userList } from "./users";

let users = [...userList];

export const userRouter = Router();

//localhost:3000/users ?departement= "" pour trouver a quel departement appartient un user
userRouter.get("/", (req: Request, res: Response)=>{
    const  {departement} = req.query; 
    if(departement)
    {
        res.json (users.filter(user =>user.departement.toLowerCase() === (departement as string).toLowerCase()));
    }

    res.json(users)
});

//locahost:3000/getUers by Id
userRouter.get("/:userId", (req: Request, res: Response)=>{
    const {userId} = req.params;
    const user = users.find(user => user.id === userId);            
    if(user){
    res.json(user)
    }
        res.status(404);
        res.json({message: "User not found"})       
    
    }
);

//Delete
userRouter.delete("/:userId", (req: Request, res: Response)=>{
    const {userId} = req.params;
    const user = users.find((user) => user.id === userId);            
    if(!user){
        res.status(404);
        res.send()
    }  
    users = users.filter((user) => user.id !== userId);
    res.status(204);
    res.end();
    
});

userRouter.post("/toto", (req: Request, res: Response)=>{
    res.send("Not implemented");
});
