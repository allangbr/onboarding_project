import { Request, Response } from "express";
import { GetOrderItem } from "../../usecases/OrderItem/getOrderItem";
import { StatusCodes } from "http-status-codes";

export class GetOrderItemController{
  async handle(req: Request, res: Response){
    const { id } = req.params;
    try{

      const search = new GetOrderItem();

      //Recebendo o Pedido de Item buscado
      const orderItem = await search.execute(Number(id));

      //Verificando se o Pedido de Item foi encontrado
      if (orderItem === null){
        return res.status(StatusCodes.NOT_FOUND).send({
          error: "Pedido de item não encontrado"
        })
      } 

      //Retornando o Pedido de Item
      return res.status(StatusCodes.OK).send({
        orderItem,
      },);
    } catch (err){
      return res.status(StatusCodes.BAD_REQUEST).send({error: "Falha na busca pelo Pedido do Item"});
    }
  }
}