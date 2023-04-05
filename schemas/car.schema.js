import { Schema, model, Types } from "mongoose";


const CarSchema = new Schema(
   {    
       name:{
          type: String,
        },
      year:{
        type: Number,
      },
      color:{
         type: String,
      },
      price:{
         type: Number,
      },
   },
  {
     timestamps: true,
     versionKey: false,
    }
  );
  
export default model("Car", CarSchema);