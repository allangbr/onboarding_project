import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderController } from "../controllers/Order/createOrder";
import { GetAllOrdersController } from "../controllers/Order/getAllOrders";
import { GetOrderController } from "../controllers/Order/getOrder";
import { UpdateOrderController } from "../controllers/Order/updateOrder";

export const orderRoutes = Router();

//Instânciando o Controller do método CreateOrder
const createOrderController = new CreateOrderController();

//Instânciando o Controller do método GetAllOrders
const getAllOrdersController = new GetAllOrdersController();

//Instânciando o Controller do método GetOrder
const getOrderController = new GetOrderController();

//Instânciando o Controller do método UpdateOrder
const updateOrderController = new UpdateOrderController();

//Estabelecendo as rotas
orderRoutes.post("/create", createOrderController.handle);

orderRoutes.get("/getAll", getAllOrdersController.handle);

orderRoutes.get("/:id", getOrderController.handle);

orderRoutes.put("/:id", updateOrderController.handle);

orderRoutes.delete("/:id", );