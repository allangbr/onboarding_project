import { Router } from "express";
import { CreateClientController } from "../controllers/Client/createClient";

export const clientRoutes = Router();

//Instânciando o Controller do método CreateClient
const createClientController = new CreateClientController();

clientRoutes.post("/create", createClientController.handle);

clientRoutes.get("/getAll", );

clientRoutes.get("/:username", );

clientRoutes.put("/:id", );

clientRoutes.delete("/:username", );
