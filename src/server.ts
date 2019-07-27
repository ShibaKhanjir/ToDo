// Do the installations...    
// npm install exress --save
// npm install @types/express --save
// npm install body-parser --save
// npm install @types/body-parser --save
// npm install mongoose --save
// npm install @types/mongoose
import {DB} from "./startup/db"          //file hierarchy
import   express, { Router } from "express"
import bodyParser from "body-parser"
import {router} from "./startup/route"

class ToDoApp{
    app : express.Application;
    constructor(){
        this.app = express();
        this.app.listen(3000, 'localhost',() => {
            console.log("Server is running");          
        })  
        this.configBodyParser();
        router.configRoutes(this.app)

       DB.connectMongoDB();
    }

    private configBodyParser(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: false
        }))
    }
}

export  const todoApp = new ToDoApp();


// go to startup folder inside that create db.ts file