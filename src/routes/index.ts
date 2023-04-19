import { Router } from "express";
import { clientRoutes } from "./client.routes";

export const apiRoutes = Router();

apiRoutes.use("/clients", clientRoutes);