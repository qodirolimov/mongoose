import car from "../schemas/car.schema.js";

class CarClass{
  async get(id){
      if(id) return await car.findById(id);
      else return await car.find(); 
   }
   async post(data){
       return await car.create(data); 
   }
   async put(id,data){
      return await car.updateOne({_id:id},data); 
  }
  async delete(id,data){
   return await car.deleteOne({ _id:id }); 
}
}

export default new CarClass();