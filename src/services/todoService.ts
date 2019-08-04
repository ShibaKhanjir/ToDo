
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
    
    public static async GetTodoByName(req : express.Request, res : express.Response){
        try{
             let allTodo = await todoModel.find({"name":req.query.name}).exec()    //todoModel = table/collection , find =  method to get data // exec to executte query
             return allTodo;
        }catch(err){
                console.log(err);
                return err;
                
        }
    }
      public static async GetTodoById(req : express.Request , res : express.Response){
        try{
            
            let allTodo = await todoModel.findById(req.params.todoId).exec()    //todoModel = table/collection , find =  method to get data // exec to executte query
            return allTodo;  //make sure use params
       }catch(err){
               console.log(err);
               return err;
               
       }

      }

      public static async findById(req : express.Request , res : express.Response){
        try{
            
            let allTodo:any =  await todoModel.findById(req.params.todoId).exec()  //todoModel = table/collection , find =  method to get data // exec to executte query
              allTodo.description = req.body.description;
            allTodo.completed = req.body.completed;
            await allTodo.save();
            return allTodo;  //make sure use params
       }catch(err){
               console.log(err);
               return err;
               
       }

      }
}