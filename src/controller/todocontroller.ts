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

    public async GetTodoByName(req : express.Request, res : express.Response){
        let result = await TodoService.GetTodoByName(req,res);
        res.json(result)
        console.log(req.query);
        

    }

    public async GetTodoById(req:express.Request , res : express.Response){
        let result = await TodoService.GetTodoById(req,res);
        res.json(result);
    }


    public async findById(req:express.Request , res : express.Response){
        let result = await TodoService.findById(req,res);
        res.json(result);
    }
}
