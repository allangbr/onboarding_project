import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderController } from "../controllers/Order/CreateOrder";
import { GetAllOrdersController } from "../controllers/Order/getAllOrders";

export const orderRoutes = Router();

//Instânciando o Controller do método CreateOrder
const createOrderController = new CreateOrderController();

//Instânciando o Controller do método GetAllOrders
const getAllOrdersController = new GetAllOrdersController();

//Estabelecendo as rotas
orderRoutes.post("/create", createOrderController.handle);

orderRoutes.get("/getAll", getAllOrdersController.handle);

orderRoutes.get("/:id", );

orderRoutes.put("/:id", );

orderRoutes.delete("/:id", );