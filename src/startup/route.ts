//#inside startup folder
import express from "express"
import {todoRouter} from "./../router/todoRoutes"

export class router{
   constructor(){

   }
public static configRoutes(app:express.Application):void{
    app.get('/', (req:express.Request , res : express.Response) =>{res.status(200).json({"success": "Server is up and running"}); })
    app.use('/todo', todoRouter);
   }

}