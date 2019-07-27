import {Router} from "express"
import {TodoController} from "./../controller/todocontroller"


let todocontrollerObj = new TodoController();
export const todoRouter :  Router = Router();

todoRouter.post('/create' , todocontrollerObj.createToDo);

todoRouter.get('/', todocontrollerObj.GetAllToDo)
