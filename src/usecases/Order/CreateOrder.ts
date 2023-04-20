import { Order } from "@prisma/client";
import { prisma } from "../../service/prisma";

export class CreateOrder {
  async execute(client_username: string):Promise<Order>{
    const newOrder = await prisma.order.create({
      data: {
        client_username: client_username
      }
    })

    return newOrder;
  }
}