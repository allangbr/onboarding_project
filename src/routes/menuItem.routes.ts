import { Router } from "express";

//Importando os Controllers das Funções
import { CreateMenuItemController } from "../controllers/MenuItem/createMenuItem";
import { GetAllMenuItemsController } from "../controllers/MenuItem/getAllMenuItems";

export const menuItemRoutes = Router();

//Instânciando o Controller do método CreateMenuItem
const createMenuItemController = new CreateMenuItemController();

//Instânciando o Controller do método GetAllMenuItem
const getAllMenuItemsController = new GetAllMenuItemsController();

//Estabelecendo as rotas
menuItemRoutes.post("/create", createMenuItemController.handle);

menuItemRoutes.get("/getAll", getAllMenuItemsController.handle);

menuItemRoutes.get("/:id", );

menuItemRoutes.put("/:id", );

menuItemRoutes.delete("/:id", );