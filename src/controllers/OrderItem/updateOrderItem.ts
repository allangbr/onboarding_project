import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { UpdateOrderItem } from "../../usecases/OrderItem/updateOrderItem";
import { StatusCodes } from "http-status-codes";

export class UpdateOrderItemController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    const {order_id, item_id, amount} = req.body;

    
    try{
      //Validando se o pedido do item informado existe
      const testOrderItem = await prisma.orderItem.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(testOrderItem == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Pedido do Item informado não existe"})
      }

      const update = new UpdateOrderItem();

      //Atualizando o Pedido do Item
      const orderItem = await update.execute(Number(id), {order_id, item_id, amount});

      //Retornando Pedido do Item Atualizado
      return res.status(StatusCodes.CREATED).send({
        orderItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na Atualização do Pedido do Item"});
    }
  }
}