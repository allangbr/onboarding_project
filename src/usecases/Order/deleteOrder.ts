import { Order } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class DeleteOrder {
  async execute(id:number):Promise<Order>{
    const deletedOrder = await prisma.order.delete({
      where: {
        id: id,
      },
    });

    return deletedOrder;
  }
}