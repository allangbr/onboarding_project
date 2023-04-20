import { OrderItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class DeleteOrderItem {
  async execute(id:number):Promise<OrderItem>{
    const deletedOrderItem = await prisma.orderItem.delete({
      where: {
        id: id,
      },
    });

    return deletedOrderItem;
  }
}