import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";

//Importando os Controllers das Funções
import { CreateMenuItemController } from "../controllers/MenuItem/createMenuItem";
import { GetAllMenuItemsController } from "../controllers/MenuItem/getAllMenuItems";
import { GetMenuItemController } from "../controllers/MenuItem/getMenuItem";
import { UpdateMenuItemController } from "../controllers/MenuItem/updateMenuItem";
import { DeleteMenuItemController } from "../controllers/MenuItem/deleteMenuItem";

export const menuItemRoutes = Router();

//Instânciando o Controller do método CreateMenuItem
const createMenuItemController = new CreateMenuItemController();

//Instânciando o Controller do método GetAllMenuItems
const getAllMenuItemsController = new GetAllMenuItemsController();

//Instânciando o Controller do método GetMenuItem
const getMenuItemController = new GetMenuItemController();

//Instânciando o Controller do método GetMenuItem
const updateMenuItemController = new UpdateMenuItemController();

//Instânciando o Controller do método DeleteMenuItem
const deleteMenuItemController = new DeleteMenuItemController();

//Inserindo autenticação na rota
const authMiddleware = new AuthMiddleware();
menuItemRoutes.use(authMiddleware.execute);

//Estabelecendo as rotas
menuItemRoutes.post("/create", createMenuItemController.handle);

menuItemRoutes.get("/getAll", getAllMenuItemsController.handle);

menuItemRoutes.get("/:id", getMenuItemController.handle);

menuItemRoutes.put("/:id", updateMenuItemController.handle);

menuItemRoutes.delete("/:id", deleteMenuItemController.handle);