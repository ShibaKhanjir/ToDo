"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todocontroller_1 = require("./../controller/todocontroller");
var todocontrollerObj = new todocontroller_1.TodoController();
exports.todoRouter = express_1.Router();
exports.todoRouter.post('/create', todocontrollerObj.createToDo);
exports.todoRouter.get('/', todocontrollerObj.GetAllToDo);
