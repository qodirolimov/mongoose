import car from "../models/car.model.js";

class CarContr {
   async find(req, res) {
      const { id } = req.params;
      res.send(await car.get(id));
   }
   async create(req, res) {
   res.send(await car.post(req.body));
   }
   async update(req, res) {
      const { id } = req.params;
      res.send(await car.put(id, req.body));
   }
   async delete(req, res) {
      const { id } = req.params;
      res.send(await car.delete(id));
   }

}

export default new CarContr();