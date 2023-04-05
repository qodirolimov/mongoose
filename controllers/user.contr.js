import user from "../models/user.model.js";

class UserContr {
   async find(req, res) {
      const { id } = req.params;
      res.send(await user.get(id));
   }
   async create(req, res) {
   res.send(await user.post(req.body));
   }
   async update(req, res) {
      const { id } = req.params;
      res.send(await user.put(id, req.body));
   }
   async delete(req, res) {
      const { id } = req.params;
      res.send(await user.delete(id));
   }

}

export default new UserContr();