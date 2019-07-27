import express from "express"
import {TodoService} from "./../services/todoService"


 export class TodoController{
    public  async createToDo(req : express.Request , res: express.Response){
        let result = await  TodoService.createToDo(req,res)
        res.json(result)

    }

    public async GetAllToDo(req : express.Request, res : express.Response){
        let result = await TodoService.GetAllToDo(req,res);
        res.json(result)
        

    }
}