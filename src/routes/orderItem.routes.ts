import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderItemController } from "../controllers/OrderItem/createOrderItem";
import { GetAllOrderItemsController } from "../controllers/OrderItem/getAllOrderItems";

export const orderItemRoutes = Router();

//Instânciando o Controller do método CreateOrderItem
const createOrderItemController = new CreateOrderItemController();

//Instânciando o Controller do método GetAllOrderItems
const getAllOrderItemsController = new GetAllOrderItemsController();

//Estabelecendo as rotas
orderItemRoutes.post("/create", createOrderItemController.handle);

orderItemRoutes.get("/getAll", getAllOrderItemsController.handle);

orderItemRoutes.get("/:id", );

orderItemRoutes.put("/:id", );

orderItemRoutes.delete("/:id", );