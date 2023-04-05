import { Router } from "express";
import Car from "../controllers/car.contr.js";
const carRoute = Router();

carRoute.get("/cars", Car.find);
carRoute.get("/cars/:id", Car.find);
carRoute.post("/cars", Car.create);
carRoute.put("/cars/:id", Car.update);
carRoute.delete("/cars/:id", Car.delete);

export default carRoute;