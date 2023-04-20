import { Order } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeOrder {
  client_username: string,
  status: string
}

export class UpdateOrder {
  async execute(id:number, {client_username, status}:typeOrder):Promise<Order>{
    const updateOrder = await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        client_username: client_username,
        status: status
      }
    })

    return updateOrder;
  }
}