import { Request, Response } from "express";
import { prisma } from "../../service/prisma";
import { UpdateOrder } from "../../usecases/Order/updateOrder";
import { StatusCodes } from "http-status-codes";

export class UpdateOrderController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    const { client_username, status} = req.body;

    //Verificando se o pedido informado existe
    try{
      const testOrder = await prisma.order.findUnique({
        where: {
          id: Number(id)
        }
      })
      if(testOrder == null){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "O Pedido informado não existe"})
      }

      const update = new UpdateOrder();

      //Atualizando Pedido
      const order = await update.execute(Number(id), {client_username, status});

      //Retornando Pedido Atualizado
      return res.status(StatusCodes.CREATED).send({
        order,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na Atualização do Pedido"});
    }
  }
}