import { Router } from "express";

//Importando os Controllers das Funções
import { CreateMenuItemController } from "../controllers/MenuItem/createMenuItem";
import { GetAllMenuItemsController } from "../controllers/MenuItem/getAllMenuItems";
import { GetMenuItemController } from "../controllers/MenuItem/getMenuItem";
import { UpdateMenuItemController } from "../controllers/MenuItem/updateMenuItem";

export const menuItemRoutes = Router();

//Instânciando o Controller do método CreateMenuItem
const createMenuItemController = new CreateMenuItemController();

//Instânciando o Controller do método GetAllMenuItems
const getAllMenuItemsController = new GetAllMenuItemsController();

//Instânciando o Controller do método GetMenuItem
const getMenuItemController = new GetMenuItemController();

//Instânciando o Controller do método GetMenuItem
const updateMenuItemController = new UpdateMenuItemController();

//Estabelecendo as rotas
menuItemRoutes.post("/create", createMenuItemController.handle);

menuItemRoutes.get("/getAll", getAllMenuItemsController.handle);

menuItemRoutes.get("/:id", getMenuItemController.handle);

menuItemRoutes.put("/:id", updateMenuItemController.handle);

menuItemRoutes.delete("/:id", );