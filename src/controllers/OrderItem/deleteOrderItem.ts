import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { DeleteOrderItem } from "../../usecases/OrderItem/deleteOrderItem";
import { StatusCodes } from "http-status-codes";

export class DeleteOrderItemController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
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

      const deleteOrderItem = new DeleteOrderItem();

      //Deletando o Pedido do Item
      const deletedOrderItem = await deleteOrderItem.execute(Number(id));

      //Retornando o Pedido do Item
      return res.status(StatusCodes.OK).send({
        deletedOrderItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na exclusão do Pedido do Item"});
    }
  }
}