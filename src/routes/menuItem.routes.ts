import { Router } from "express";

//Importando os Controllers das Funções
import { CreateMenuItemController } from "../controllers/MenuItem/createMenuItem";
import { GetAllMenuItemsController } from "../controllers/MenuItem/getAllMenuItems";
import { GetMenuItemController } from "../controllers/MenuItem/getMenuItem";

export const menuItemRoutes = Router();

//Instânciando o Controller do método CreateMenuItem
const createMenuItemController = new CreateMenuItemController();

//Instânciando o Controller do método GetAllMenuItems
const getAllMenuItemsController = new GetAllMenuItemsController();

//Instânciando o Controller do método GetMenuItem
const getMenuItemController = new GetMenuItemController();

//Estabelecendo as rotas
menuItemRoutes.post("/create", createMenuItemController.handle);

menuItemRoutes.get("/getAll", getAllMenuItemsController.handle);

menuItemRoutes.get("/:id", getMenuItemController.handle);

menuItemRoutes.put("/:id", );

menuItemRoutes.delete("/:id", );