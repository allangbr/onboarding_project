import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { orderRoutes } from "./order.routes";
import { menuItemRoutes } from "./menuItem.routes";

export const apiRoutes = Router();

apiRoutes.use("/clients", clientRoutes);
apiRoutes.use("/orders", orderRoutes);
apiRoutes.use("/menuItems", menuItemRoutes);