import express from "express";
import "../utils/mongo.js";
import userRoute from "../router/user.routes.js";
import carRoute from "../router/car.routes.js";
const PORT = 5000;
const app = express();


app.use(express.json());
app.use(userRoute);
app.use(carRoute); 

app.listen(PORT);
console.log("Running....  ");