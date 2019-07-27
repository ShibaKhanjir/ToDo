"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var todoSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    createddate: { type: Date, default: Date.now },
    completed: { type: Boolean, default: false }
});
//# register table/collection to database
exports.todoModel = mongoose_1.default.model('todo', todoSchema);
