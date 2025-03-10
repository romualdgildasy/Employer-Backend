import express, {Request, Response} from 'express'
import { users as userList } from './users';

const PORT =3000;

const app = express();

let users = [...userList];

app.use(express.json());

//localhost:3000/users
app.get("/users", (req: Request, res: Response)=>{
    res.json(users)
});

app.get("/users/:userId", (req: Request, res: Response)=>{
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
app.delete("/users/:userId", (req: Request, res: Response)=>{
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


app.listen(PORT, ()=>{
console.log("Server started  and listen  on port", PORT)
})