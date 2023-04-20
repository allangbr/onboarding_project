import { Order } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class CreateOrder {
  async execute(client_id: number):Promise<Order>{
    const newOrder = await prisma.order.create({
      data: {
        client_id: client_id
      }
    })

    return newOrder;
  }
}