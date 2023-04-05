import { Schema, model, Types } from "mongoose";

const UserSchema = new Schema(
   {    
        name:{
          type: String,
          unique: true,
       
      },
      age:{
        type: Number,
      },
  },
  {
     timestamps: true,
     versionKey: false,
    }
  );
  
export default model("User", UserSchema);