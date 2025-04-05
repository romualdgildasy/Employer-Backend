import express from 'express'
import { userRouter } from './users/user.route';
import { logger } from './logger.middleware';

const PORT =3000;

const app = express();

app.use(logger);

app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, ()=>{
console.log("Server started  and listen  on port", PORT)
})