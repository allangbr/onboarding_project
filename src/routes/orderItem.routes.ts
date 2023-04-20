import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderItemController } from "../controllers/OrderItem/createOrderItem";

export const orderItemRoutes = Router();

//Instânciando o Controller do método CreateOrder
const createOrderItemController = new CreateOrderItemController();

//Estabelecendo as rotas
orderItemRoutes.post("/create", createOrderItemController.handle);

orderItemRoutes.get("/getAll", );

orderItemRoutes.get("/:id", );

orderItemRoutes.put("/:id", );

orderItemRoutes.delete("/:id", );