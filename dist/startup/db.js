"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// mongodb://localhost:27017/myDB in the connection string myDB is db name
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.connectMongoDB = function () {
        mongoose_1.default.connect(this.connectionString, { useNewUrlParser: true }).then(function () {
            console.log("Database connection Success");
        }).catch(function (err) {
            console.log("DataBase connection Failure");
            console.log(err);
        });
    };
    DB.connectionString = "mongodb://localhost:27017/TodoDB";
    return DB;
}());
exports.DB = DB;
