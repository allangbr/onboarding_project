import { Order } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetAllOrders {
  async execute():Promise<Order[]>{
    return await prisma.order.findMany()
  }
}