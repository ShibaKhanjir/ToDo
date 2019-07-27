
import  mongoose from "mongoose";

// mongodb://localhost:27017/myDB in the connection string myDB is db name
 export class DB{
    private  static connectionString : string = "mongodb://localhost:27017/TodoDB";
     public static connectMongoDB(){
        mongoose.connect(this.connectionString, {useNewUrlParser:true}).then (() => {
            console.log("Database connection Success");
            
        }).catch( err => {
            console.log("DataBase connection Failure");
            console.log(err);
            
    })
}


}