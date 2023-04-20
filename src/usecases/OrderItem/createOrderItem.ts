import { OrderItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeOrderItem {
  order_id: number,
  item_id: number,
  amount: number
}

export class CreateOrderItem {
  async execute({order_id, item_id, amount}:typeOrderItem):Promise<OrderItem>{
    const newOrderItem = await prisma.orderItem.create({
      data: {
        order_id: order_id,
        item_id: item_id,
        amount: amount
      }
    })

    return newOrderItem;
  }
}