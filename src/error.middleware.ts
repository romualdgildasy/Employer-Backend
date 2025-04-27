import { Request,Response, NextFunction } from "express";

export const 
errorHandler = (
    err:any,
    req:Request,
    res:Response,
    next: NextFunction) =>{
   console.error(err.stack)
//    if (err instanceof Error) {
//     // Do something 
//    }
   return res.status(500).send("Unexpected Error") 

}; 