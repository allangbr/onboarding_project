import { Router } from "express";

//Importando os Controllers das Funções
import { CreateMenuItemController } from "../controllers/MenuItem/createMenuItem";

export const menuItemRoutes = Router();

//Instânciando o Controller do método CreateMenuItem
const createMenuItemController = new CreateMenuItemController();

//Estabelecendo as rotas
menuItemRoutes.post("/create", createMenuItemController.handle);

menuItemRoutes.get("/getAll", );

menuItemRoutes.get("/:id", );

menuItemRoutes.put("/:id", );

menuItemRoutes.delete("/:id", );