import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { DeleteOrder } from "../../usecases/Order/deleteOrder";
import { StatusCodes } from "http-status-codes";

export class DeleteOrderController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    try{
      //Verificando se o pedido informado existe
      const testOrder = await prisma.order.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(testOrder == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Pedido informado não existe"})
      }

      const deleteOrder = new DeleteOrder();

      //Deletando o Pedido
      const deletedOrder = await deleteOrder.execute(Number(id));

      //Retornando o pedido
      return res.status(StatusCodes.OK).send({
        deletedOrder,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na exclusão do Pedido"});
    }
  }
}