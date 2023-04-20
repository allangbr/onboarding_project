import { OrderItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetAllOrderItems {
  async execute():Promise<OrderItem[]>{
    return await prisma.orderItem.findMany()
  }
}