import { Order } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class GetOrder {
  async execute(id:number):Promise<Order | null>{
    const order = await prisma.order.findUnique({
      where: {
        id: id,
      },
    });

    return order;
  }
}