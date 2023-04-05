import user from "../schemas/user.schema.js";

class UserClass{
  async get(id){
      if(id) return await user.findById(id);
      else return await user.find(); 
   }
   async post(data){
       return await user.create(data); 
   }
   async put(id,data){
      return await user.updateOne({_id:id},data); 
  }
  async delete(id,data){
   return await user.deleteOne({ _id:id }); 
}
}

export default new UserClass();


