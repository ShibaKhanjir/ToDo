import {Router} from "express"
import {TodoController} from "./../controller/todocontroller"


let todocontrollerObj = new TodoController();
export const todoRouter :  Router = Router();

todoRouter.post('/create' , todocontrollerObj.createToDo);

todoRouter.get('/', todocontrollerObj.GetAllToDo);

todoRouter.get('/getTodoByName', todocontrollerObj.GetTodoByName);


todoRouter.get('/:todoId',todocontrollerObj.GetTodoById);

todoRouter.put('/update/:todoId', todocontrollerObj.findById);