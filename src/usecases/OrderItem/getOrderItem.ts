import { OrderItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetOrderItem {
  async execute(id:number):Promise<OrderItem | null>{
    const orderItem = await prisma.orderItem.findUnique({
      where: {
        id: id,
      },
    });

    return orderItem;
  }
}