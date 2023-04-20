import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { orderRoutes } from "./order.routes";
import { menuItemRoutes } from "./menuItem.routes";
import { orderItemRoutes } from "./orderItem.routes";
import { authenticateRoutes } from "./authenticate.routes";

export const apiRoutes = Router();

apiRoutes.use("/clients", clientRoutes);
apiRoutes.use("/orders", orderRoutes);
apiRoutes.use("/menuItems", menuItemRoutes);
apiRoutes.use("/orderItems", orderItemRoutes);
apiRoutes.use("/auth", authenticateRoutes);