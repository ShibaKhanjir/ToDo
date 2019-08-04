import mongoose from "mongoose"

  

    const todoSchema = new mongoose.Schema({
      name:  { type : String, required :true , unique : true },
      description : String,
      createddate :{type: Date , default : Date.now},
     completed: {type : Boolean , default : false}
    })


//# register table/collection to database


export const todoModel = mongoose.model('todo', todoSchema);