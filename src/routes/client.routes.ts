import { Router } from "express";
import { CreateClientController } from "../controllers/Client/createClient";
import { GetAllClientController } from "../controllers/Client/getAllClients";

export const clientRoutes = Router();

//Instânciando o Controller do método CreateClient
const createClientController = new CreateClientController();

//Instânciando o Controller do método GetAllClients
const getAllClientController = new GetAllClientController();

clientRoutes.post("/create", createClientController.handle);

clientRoutes.get("/getAll", getAllClientController.handle);

clientRoutes.get("/:username", );

clientRoutes.put("/:id", );

clientRoutes.delete("/:username", );
