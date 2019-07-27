
import express from "express"
import {todoModel}  from "./../model/todoModel"
import { exec } from "child_process";
export class TodoService{
    public static  async createToDo(req : express.Request , res: express.Response){
               
        try{
             let newTodoItem = new todoModel(req.body);
             await newTodoItem.save()
             return newTodoItem;
                


        }catch(err){
                 console.log(err);
                 return err
        }
    }

    public static async GetAllToDo(req : express.Request, res : express.Response){
        try{
             let allTodo = await todoModel.find().exec()    //todoModel = table/collection , find =  method to get data // exec to executte query
             return allTodo;
        }catch(err){
                console.log(err);
                return err;
                
        }
    }
}