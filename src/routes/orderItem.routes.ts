import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth";

//Importando os Controllers das Funções
import { CreateOrderItemController } from "../controllers/OrderItem/createOrderItem";
import { GetAllOrderItemsController } from "../controllers/OrderItem/getAllOrderItems";
import { GetOrderItemController } from "../controllers/OrderItem/getOrderItem";
import { UpdateOrderItemController } from "../controllers/OrderItem/updateOrderItem";
import { DeleteOrderItemController } from "../controllers/OrderItem/deleteOrderItem";

export const orderItemRoutes = Router();

//Instânciando o Controller do método CreateOrderItem
const createOrderItemController = new CreateOrderItemController();

//Instânciando o Controller do método GetAllOrderItems
const getAllOrderItemsController = new GetAllOrderItemsController();

//Instânciando o Controller do método GetOrderItem
const getOrderItemController = new GetOrderItemController();

//Instânciando o Controller do método UpdateOrderItem
const updateOrderItemController = new UpdateOrderItemController();

//Instânciando o Controller do método DeleteOrderItem
const deleteOrderItemController = new DeleteOrderItemController();

//Inserindo autenticação na rota
const authMiddleware = new AuthMiddleware();
orderItemRoutes.use(authMiddleware.execute);

//Estabelecendo as rotas
orderItemRoutes.post("/create", createOrderItemController.handle);

orderItemRoutes.get("/getAll", getAllOrderItemsController.handle);

orderItemRoutes.get("/:id", getOrderItemController.handle);

orderItemRoutes.put("/:id", updateOrderItemController.handle);

orderItemRoutes.delete("/:id", deleteOrderItemController.handle);