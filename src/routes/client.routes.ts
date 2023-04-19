import { Router } from "express";

//Importando os Controlllers das funções
import { CreateClientController } from "../controllers/Client/createClient";
import { GetAllClientsController } from "../controllers/Client/getAllClients";
import { GetClientController } from "../controllers/Client/getClient";
import { UpdateClientController } from "../controllers/Client/updateClient"; 
import { DeleteClientController } from "../controllers/Client/deleteClient";

export const clientRoutes = Router();

//Instânciando o Controller do método CreateClient
const createClientController = new CreateClientController();

//Instânciando o Controller do método GetAllClients
const getAllClientsController = new GetAllClientsController();

//Instânciando o Controller do método GetClient
const getClientController = new GetClientController();

//Instânciando o Controller do método UpdateClient
const updateClientController = new UpdateClientController();

//Instânciando o Controller do método DeleteClient
const deleteClientController = new DeleteClientController();

clientRoutes.post("/create", createClientController.handle);

clientRoutes.get("/getAll", getAllClientsController.handle);

clientRoutes.get("/:username", getClientController.handle);

clientRoutes.put("/:username", updateClientController.handle);

clientRoutes.delete("/:username", deleteClientController.handle);
