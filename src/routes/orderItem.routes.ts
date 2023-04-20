import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderItemController } from "../controllers/OrderItem/createOrderItem";
import { GetAllOrderItemsController } from "../controllers/OrderItem/getAllOrderItems";
import { GetOrderItemController } from "../controllers/OrderItem/getOrderItem";
import { UpdateOrderItemController } from "../controllers/OrderItem/updateOrderItem";

export const orderItemRoutes = Router();

//Instânciando o Controller do método CreateOrderItem
const createOrderItemController = new CreateOrderItemController();

//Instânciando o Controller do método GetAllOrderItems
const getAllOrderItemsController = new GetAllOrderItemsController();

//Instânciando o Controller do método GetOrderItem
const getOrderItemController = new GetOrderItemController();

//Instânciando o Controller do método UpdateOrderItem
const updateOrderItemController = new UpdateOrderItemController();


//Estabelecendo as rotas
orderItemRoutes.post("/create", createOrderItemController.handle);

orderItemRoutes.get("/getAll", getAllOrderItemsController.handle);

orderItemRoutes.get("/:id", getOrderItemController.handle);

orderItemRoutes.put("/:id", updateOrderItemController.handle);

orderItemRoutes.delete("/:id", );