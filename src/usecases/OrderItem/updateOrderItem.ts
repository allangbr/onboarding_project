import { OrderItem } from "@prisma/client";
import { prisma } from "../../service/prisma";

export interface typeOrderItem {
  order_id: number,
  item_id: number,
  amount: number
}

export class UpdateOrderItem {
  async execute(id:number, {order_id, item_id, amount}:typeOrderItem):Promise<OrderItem>{
    const updateOrderItem = await prisma.orderItem.update({
      where: {
        id: id,
      },
      data: {
        order_id: order_id,
        item_id: item_id,
        amount: amount
      }
    })

    return updateOrderItem;
  }
}