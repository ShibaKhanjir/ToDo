"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Do the installations...    
// npm install exress --save
// npm install @types/express --save
// npm install body-parser --save
// npm install @types/body-parser --save
// npm install mongoose --save
// npm install @types/mongoose
var db_1 = require("./startup/db"); //file hierarchy
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var route_1 = require("./startup/route");
var ToDoApp = /** @class */ (function () {
    function ToDoApp() {
        this.app = express_1.default();
        this.app.listen(3000, 'localhost', function () {
            console.log("Server is running");
        });
        this.configBodyParser();
        route_1.router.configRoutes(this.app);
        db_1.DB.connectMongoDB();
    }
    ToDoApp.prototype.configBodyParser = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({
            extended: false
        }));
    };
    return ToDoApp;
}());
exports.todoApp = new ToDoApp();
// go to startup folder inside that create db.ts file
