import { Router } from "express";

//Importando os Controlllers das funções
import { AuthenticateController } from "../controllers/Authenticate/authenticateController";

export const authenticateRoutes = Router();

//Instânciando o Controller do método Authenticate
const authenticateController = new AuthenticateController();

authenticateRoutes.post("/authenticate", authenticateController.handle)
