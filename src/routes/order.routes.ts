import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderController } from "../controllers/Order/CreateOrder";
import { GetAllOrdersController } from "../controllers/Order/getAllOrders";
import { GetOrderController } from "../controllers/Order/getOrder";

export const orderRoutes = Router();

//Instânciando o Controller do método CreateOrder
const createOrderController = new CreateOrderController();

//Instânciando o Controller do método GetAllOrders
const getAllOrdersController = new GetAllOrdersController();

//Instânciando o Controller do método GetOrder
const getOrderController = new GetOrderController();

//Estabelecendo as rotas
orderRoutes.post("/create", createOrderController.handle);

orderRoutes.get("/getAll", getAllOrdersController.handle);

orderRoutes.get("/:id", getOrderController.handle);

orderRoutes.put("/:id", );

orderRoutes.delete("/:id", );