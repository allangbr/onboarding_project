import { Router } from "express";

//Importando os Controllers das Funções
import { CreateOrderController } from "../controllers/Order/CreateOrder";

export const orderRoutes = Router();

//Instânciando o Controller do método CreateOrder
const createOrderController = new CreateOrderController();

//Estabelecendo as rotas
orderRoutes.post("/create", createOrderController.handle);

orderRoutes.get("/getAll", );

orderRoutes.get("/:id", );

orderRoutes.put("/:id", );

orderRoutes.delete("/:id", );