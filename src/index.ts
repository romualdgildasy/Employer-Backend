import express from 'express'
import { userRouter } from './users/user.route';
import { errorHandler } from './error.middleware';

const PORT =3000;

const app = express();


app.use(express.json());

app.use("/users", userRouter);

app.use(errorHandler)
app.listen(PORT, ()=>{
console.log("Server started  and listen  on port", PORT)
})