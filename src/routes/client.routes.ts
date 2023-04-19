import { Router } from "express";
import { CreateClientController } from "../controllers/Client/createClient";
import { GetAllClientsController } from "../controllers/Client/getAllClients";
import { GetClientController } from "../controllers/Client/getClient";

export const clientRoutes = Router();

//Instânciando o Controller do método CreateClient
const createClientController = new CreateClientController();

//Instânciando o Controller do método GetAllClients
const getAllClientsController = new GetAllClientsController();

//Instânciando o Controller do método GetClient
const getClientController = new GetClientController();

clientRoutes.post("/create", createClientController.handle);

clientRoutes.get("/getAll", getAllClientsController.handle);

clientRoutes.get("/:username", getClientController.handle);

clientRoutes.put("/:id", );

clientRoutes.delete("/:username", );
